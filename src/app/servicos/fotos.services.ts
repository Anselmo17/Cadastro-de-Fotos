import {} from "@angular/common/http";
import { HttpClient , HttpHeaders} from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import  'rxjs/add/operator/map';
import { FotoComponent } from "../foto/foto.component";
import { Injectable } from "@angular/core";

@Injectable()
export class FotoService{

    private url = 'http://localhost:3000/v1/fotos/';

    private opcoesHttp = { headers : new HttpHeaders ({'Content-Type': 'application/json'})}

    constructor ( private conexaoApi: HttpClient){}

    //lista os dados 
    listar(){
       return this.conexaoApi.get<FotoComponent[]>(this.url)
    }

    //postar os dados 
    cadastrar(foto: FotoComponent):Observable<Mensagens>{
        return this.conexaoApi.post(this.url, JSON.stringify(foto), this.opcoesHttp)
        .map(
            () => new Mensagens(`Foto ${foto.titulo} cadastro com sucesso`)
        )
    }


    //apagar os dados 
    deletar(foto:FotoComponent):Observable<Object>{
        return this.conexaoApi.delete(this.url+foto._id);
    }

    //consultar os dados 
    consultar(fotoId: string):Observable<FotoComponent>{
        return this.conexaoApi.get<FotoComponent>(
            this.url+fotoId       
        )
    }

        //alterar os dados 
    alterar(foto:FotoComponent):Observable<Mensagens>{
        return this.conexaoApi.put(
            this.url+foto._id ,JSON.stringify(foto),this.opcoesHttp
        ) .map(
            () => new Mensagens(`Foto ${foto.titulo} alterada com  sucesso`)
        )
    }

}

class Mensagens{
    constructor(private _texto:string){}
        get texto(){
            return this._texto
        }
    
}