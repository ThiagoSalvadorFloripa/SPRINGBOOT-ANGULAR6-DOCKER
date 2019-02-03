import { Contato } from './../../models/contato.model';
import { ContatoService } from './../contato.service';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {first} from "rxjs/operators";

@Component({
  selector: 'app-edita-contato',
  templateUrl: './edita-contato.component.html',
  styleUrls: ['./edita-contato.component.css']
})
export class EditaContatoComponent implements OnInit {

  conto: Contato;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private router: Router, private contatoService: ContatoService) { }


  ngOnInit() {
    let contId = localStorage.getItem("editContatoId");
    if(!contId) {
      alert("Invalid action.")
      this.router.navigate(['lista-contato']);
      return;
  }
  this.editForm = this.formBuilder.group({
    id: [],
    nome: ['', Validators.required],
    email: ['', Validators.required],
    dataCadastro:['',Validators.required],
    status:['',Validators.required]

  });
  
  this.contatoService.getContato(+contId)
    .subscribe( data => {
      this.editForm.setValue(data);
    });
  }
  
  
  voltar(){
    this.router.navigate(['lista-contato']);
  }

  update() {
    this.contatoService.update(this.editForm.value)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['lista-contatos']);
        },
        error => {
          alert(error);
        });
  }

}
