import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { LoginComponent } from './components/pages/login/login.component';
import { GeracaoEnergiaComponent } from './components/pages/geracao-energia/geracao-energia.component';
import { UnidadesComponent } from './components/pages/unidades/unidades.component';
import { HomeComponent } from './components/pages/home/home.component';
import { AuthGuardService } from './service/auth-guard.service';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuardService],
  },
  {
    path: 'geracaoEnergia',
    component: GeracaoEnergiaComponent,
    canActivate: [AuthGuardService],
  },

  {
    path: 'unidades',
    component: UnidadesComponent,
    canActivate: [AuthGuardService],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
