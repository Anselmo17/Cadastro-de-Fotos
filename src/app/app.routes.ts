import { Routes , RouterModule} from "@angular/router";
import{ListagemComponent}from "./listagem/listagem.component";
import { CadastroComponent } from "./cadastro/cadastro.component";

/*posições da rotas*/
const rotasApp:Routes =[
    {path:"", component: ListagemComponent},
    {path:"cadastro", component:CadastroComponent},
    {path:"cadastro/:fotoId", component:CadastroComponent},
    {path:'**', redirectTo:''}
]  

/*exportando o roteamento  */
export const roteamento =  RouterModule.forRoot(rotasApp)

