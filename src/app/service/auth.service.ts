import { Injectable } from '@angular/core';
import { LoginModel } from '../model/LoginModel';
import { Router } from '@angular/router';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarioAutenticado: boolean = false;
  onMenuEmiter = new EventEmitter<boolean>();
  constructor(private router: Router) {}
  entrar(usuario: LoginModel) {
    if (usuario.email === 'admin@admin.com' && usuario.senha === 'admin') {
      this.usuarioAutenticado = true;
      this.onMenuEmiter.emit(true);
      this.router.navigate(['dashboard']);
    } else {
      this.usuarioAutenticado = false;
      this.onMenuEmiter.emit(false);
    }
  }
  userAuth() {
    return this.usuarioAutenticado;
  }
}
