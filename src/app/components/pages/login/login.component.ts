import { Component, OnInit } from '@angular/core';
import {
  AnyForUntypedForms,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from 'src/app/model/LoginModel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { map, filter, scan } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public usuario: LoginModel = new LoginModel();
  constructor(
    private formBuiler: FormBuilder,
    public router: Router,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}
  submitLogin(form: any) {
    console.log(form);
  }
  entrar() {
    this.authService.entrar(this.usuario);
  }
}
