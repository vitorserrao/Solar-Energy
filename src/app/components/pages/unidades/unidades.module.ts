import { CommonModule } from '@angular/common';
import { importExpr } from '@angular/compiler/src/output/output_ast';
import { NgModule } from '@angular/core';
import { UnidadesComponent } from './unidades.component';
import { CadastroUnidadeComponent } from './cadastro-unidade/cadastro-unidade.component';
import { UnidadeRoutingModule } from './unidades-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UnidadesComponent, CadastroUnidadeComponent],
  imports: [
    CommonModule,
    UnidadeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [],
})
export class UnidadesModule {}
