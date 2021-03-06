import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule} from "@angular/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import{HttpClientModule} from '@angular/common/http';


import {FotoModule} from "./foto/foto.module";
import{PainelModule} from "./painel/painel.module";
import { AppComponent } from './app.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { ListagemComponent } from './listagem/listagem.component';
import { roteamento } from './app.routes';
import { FotoService } from './servicos/fotos.services';




@NgModule({
  declarations: [

    AppComponent,

    CadastroComponent,

    ListagemComponent
  ],
  imports: [
    BrowserModule,
    FotoModule,
    HttpModule,
    HttpClientModule,
    PainelModule,
    roteamento,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [FotoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
