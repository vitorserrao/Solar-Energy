import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroUnidadeComponent } from './cadastro-unidade/cadastro-unidade.component';
import { UnidadesComponent } from './unidades.component';
const unidadesroutes: Routes = [
  { path: 'unidades', component: UnidadesComponent },
  { path: 'unidades/cadastroUnidades', component: CadastroUnidadeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(unidadesroutes)],
  exports: [RouterModule],
})
export class UnidadeRoutingModule {}
