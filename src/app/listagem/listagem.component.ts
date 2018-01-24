import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import {FotoService} from "../servicos/fotos.services";
import { FotoComponent } from '../foto/foto.component';


@Component({
  selector: 'cp-listagem',
  templateUrl: "./listagem.component.html"
    ,
  styles: []
})


export class ListagemComponent implements OnInit {

titulo = 'CaelumPic'
listaFotos : FotoComponent[] = []

    constructor(private servico: FotoService) { 

      servico.listar().subscribe( fotoApi =>this.listaFotos = fotoApi
       , erro => console.log(erro)

      ) 
    }
    ngOnInit(){}

    remover(foto: FotoComponent){
      
      
      this.servico.deletar(foto).subscribe(
          ()=> console.log('apaga.. ${foto.titulo}')
      )
    }
}