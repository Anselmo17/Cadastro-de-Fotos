import {Component , Input} from "@angular/core";

@Component({
    selector:'painel',
    templateUrl:'./painel.component.html'

})

/* exporta o componente */
export class PainelComponent{
    @Input() titulo: string
}