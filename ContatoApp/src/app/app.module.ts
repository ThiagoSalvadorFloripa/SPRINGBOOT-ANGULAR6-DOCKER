import { ContatoService } from './contato/contato.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import { MatCheckboxModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatCardModule } from '@angular/material';

import {MatGridListModule, MatListModule, MatNativeDateModule, MatPaginatorModule, MatSortModule, MatTableModule} from '@angular/material';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroContatoComponent } from './contato/cadastro-contato/cadastro-contato.component';
import { ListaContatoComponent } from './contato/lista-contato/lista-contato.component';
import { HomeComponent } from './home/home.component';
import { EditaContatoComponent } from './contato/edita-contato/edita-contato.component';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroContatoComponent,
    ListaContatoComponent,
    HomeComponent,
    EditaContatoComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatTabsModule,
    MatListModule, 
    MatNativeDateModule, 
    MatPaginatorModule, 
    MatSortModule, 
    MatTableModule,
    MatGridListModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatSidenavModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot(),
    FormsModule
  ],
  providers: [ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
