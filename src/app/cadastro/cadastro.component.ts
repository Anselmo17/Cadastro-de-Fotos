import { Component, OnInit } from '@angular/core';
import { FotoComponent } from '../foto/foto.component';
import{HttpClient,  HttpHeaders} from '@angular/common/http';
import { FotoService } from '../servicos/fotos.services';
import{ActivatedRoute , Router} from "@angular/router";
import{FormGroup,FormBuilder,Validators}from "@angular/forms"
import { validateConfig } from '@angular/router/src/config';

@Component({
  selector: 'app-cadastro',
  templateUrl: "./cadastro.component.html"
  ,
  styles: []
})



export class CadastroComponent implements OnInit {


//estanciado o fotoComponent

  private foto = new FotoComponent()
  mensagem = ""   
  formCadastro:FormGroup

  constructor(
    private servico: FotoService,
     private rota:ActivatedRoute,
     private roteador:Router,
     private formBuilder:FormBuilder){

      this.formCadastro = formBuilder.group({
       
        titulo:['', Validators.compose(
              [
                Validators.required,
                Validators.minLength(3)
              ]
            )],
            
        url:['',Validators.required],
        descricao:''
      })

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
      
       mensagemServico=>{
         this.mensagem = mensagemServico.texto
       }
        ,erro => console.log(erro)
      )

    }
     else{
      this.servico.cadastrar(this.foto).subscribe(

        mensagemServico => {
          this.mensagem = mensagemServico.texto
          this.foto = new FotoComponent()

          
        }

        ,erro => console.log(erro)
      )
    }   
  }
}
