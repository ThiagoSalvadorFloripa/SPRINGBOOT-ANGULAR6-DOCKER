import { ContatoResposta } from './contato-resposta.model';
import { Contato } from './../../models/contato.model';
import { ContatoService } from './../contato.service';
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import{Router}  from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
@Component({
  selector: 'app-lista-contato',
  templateUrl: './lista-contato.component.html',
  styleUrls: ['./lista-contato.component.css'],
})

export class ListaContatoComponent  implements OnInit {

  private contatos:Contato[];
  
  constructor(private contatoService:ContatoService, private router:Router) { }

  ngOnInit() {
      this.contatoService.getContatos()
        .subscribe(data => {
          this.contatos = data;
        });  
  }

  deleteContato(contato: Contato): void {
    this.contatoService.deleteContato(contato.id)
      .subscribe( data => {
        this.contatos = this.contatos.filter(u => u !== contato);
      })
      this.refresh()
  };

  editContato(contato: Contato): void {
    localStorage.removeItem("editContatoId");
    localStorage.setItem("editContatoId", contato.id.toString());
    this.router.navigate(['edita-contato/',contato.id]);
  };

 
  addContato(): void {
    this.router.navigate(['/cadastro-contato']);
  };

  novo() {
    this.router.navigate(['/cadastro-contato'])
  }

  refresh(): void {
  window.location.reload();
  }
  
}
