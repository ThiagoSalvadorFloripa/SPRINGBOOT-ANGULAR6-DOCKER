import { ContatoService } from './../contato.service';
import { Contato } from './../../models/contato.model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro-contato',
  templateUrl: './cadastro-contato.component.html',
  styleUrls: ['./cadastro-contato.component.css'],
})
export class CadastroContatoComponent implements OnInit {

  contato: Contato = new Contato();

  constructor( private router: Router, private contatoService: ContatoService) {  
  }
  ngOnInit() {
  }

  cadastrar(): void {
    this.contatoService.salvarContato(this.contato)
      .subscribe( data => {
        alert('Contato cadastro com sucesso');
        this.voltar()
      });
  }

  voltar() {
    this.router.navigate(['/lista-contatos'])
  }

  verificaEmail() {
    if(this.contato != undefined && this.contato.email != undefined && this.contato.email !== ""){
      return this.contato.email.search(/@/gi) != -1 ? '': 'Não encontrado @'
    }
  }


}
