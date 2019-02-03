import { NotFoundComponent } from './not-found/not-found.component';
import { EditaContatoComponent } from './contato/edita-contato/edita-contato.component';
import { ListaContatoComponent } from './contato/lista-contato/lista-contato.component';
import { CadastroContatoComponent } from './contato/cadastro-contato/cadastro-contato.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'cadastro-contato', component: CadastroContatoComponent},
  {path: 'lista-contatos', component: ListaContatoComponent},
  {path:  'edita-contato/:id', component: EditaContatoComponent},
  { path: '', component: HomeComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
