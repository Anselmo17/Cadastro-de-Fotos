import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import{HttpClient,  HttpHeaders} from '@angular/common/http';
import { FotoService } from '../servicos/fotos.services';
import{ActivatedRoute} from "@angular/router";


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
          this.foto._id = parametros.fotoId
        }
      )
    }


  ngOnInit() {}


  /*função para pegar eventos no formulario cadastro*/
  salvar(){

    this.servico
    .cadastrar(this.foto).subscribe(
      () => {
        this.foto = new FotoComponent()
      },erro => console.log(erro)
    )     
  }
}
