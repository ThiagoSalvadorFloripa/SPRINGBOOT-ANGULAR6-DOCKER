import { ToastrModule } from 'ngx-toastr';
import { Contato } from './../models/contato.model';
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs'
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { MatTableDataSource } from "@angular/material";


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
}

@Injectable()
export class ContatoService {
  contato: Contato

 
  constructor(private http: HttpClient) {}

  private contatoUrl = 'http://localhost:8080/app/users';

 
  getContatos(): Observable<Contato[]>{
    return this.http.get<Contato[]>(this.contatoUrl + '/')
  }

  salvarContato(contato: Contato): Observable<any>{
    return this.http.post<any>(this.contatoUrl, contato);
  }

  deleteContato(id: number) {
    return this.http.delete(this.contatoUrl + '/' + id)
  }

  getContato(id: number){
    return this.http.get(this.contatoUrl + '/'+ id);
  }

  update(contato: Contato) {
    return this.http.put(this.contatoUrl + '/' + contato.id, contato);
  }

}