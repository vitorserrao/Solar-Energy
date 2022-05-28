import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { GeracaoEnergiaComponent } from './components/pages/geracao-energia/geracao-energia.component';
import { CadastroUnidadeComponent } from './components/pages/cadastro-unidade/cadastro-unidade.component';
import { HomeComponent } from './components/pages/home/home.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'geracaoEnergia', component: GeracaoEnergiaComponent },
  { path: 'cadastroUnidade', component: CadastroUnidadeComponent },
  { path: 'home', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
