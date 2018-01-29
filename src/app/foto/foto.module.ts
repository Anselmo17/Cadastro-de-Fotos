import { NgModule } from "@angular/core";
import {FotoComponent} from "./foto.component"
import{FiltroPorTitulo} from "./foto.pipe";

/*declarando o modulo do component*/ 
@NgModule({
 declarations:[FotoComponent,FiltroPorTitulo],
exports:[FotoComponent, FiltroPorTitulo]
})


/*classe do foto modulo*/ 
export class FotoModule{

}