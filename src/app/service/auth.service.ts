import { Injectable } from '@angular/core';
import { LoginModel } from '../model/LoginModel';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  constructor(private router: Router) {}
  entrar(usuario: LoginModel) {
    if (usuario.email === 'vitorwss@gmail.com' && usuario.senha === '12345') {
      this.usuarioAutenticado = true;
      this.router.navigate(['dashboard']);
    } else {
      this.usuarioAutenticado = false;
    }
  }
}
