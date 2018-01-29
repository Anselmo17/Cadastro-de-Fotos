import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import{HttpClient,  HttpHeaders} from '@angular/common/http';
import { FotoService } from '../servicos/fotos.services';
import{ActivatedRoute} from "@angular/router";
import { JSONP_ERR_WRONG_RESPONSE_TYPE } from '@angular/common/http/src/jsonp';


@Component({
  selector: 'app-cadastro',
  templateUrl: "./cadastro.component.html"
  ,
  styles: []
})



export class CadastroComponent implements OnInit {


//estanciado o fotoComponent

  private foto = new FotoComponent()
   

  constructor(private servico: FotoService, private rota:ActivatedRoute){
      rota.params.subscribe(
        parametros => {

         if(parametros.fotoId) {
            this.carregarFoto(parametros.fotoId)
         } 
        }
      )


    }

    carregarFoto(idFoto){
      this.servico.consultar(idFoto).subscribe(
        fotoApi => this.foto = fotoApi
        ,erro => console.log("erro carregando fotoApi")
      )
    }


  ngOnInit() {}


  /*função para salvar os eventos do formulario cadastro*/
  salvar(){

    if(this.foto._id){
      this.servico.alterar(this.foto).subscribe(
        resposta => console.log(resposta)
        ,erro => console.log(erro)
      )

    }
     else{
      this.servico.cadastrar(this.foto).subscribe(
        ()=> this.foto = new FotoComponent()
        ,erro => console.log(erro)
      )
    }   
  }
}
