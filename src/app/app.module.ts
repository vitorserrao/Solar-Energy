import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/pages/login/login.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { CadastroUnidadeComponent } from './components/pages/cadastro-unidade/cadastro-unidade.component';
import { GeracaoEnergiaComponent } from './components/pages/geracao-energia/geracao-energia.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CadastroUnidadeComponent,
    GeracaoEnergiaComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
