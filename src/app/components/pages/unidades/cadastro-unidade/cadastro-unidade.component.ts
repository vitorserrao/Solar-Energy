import { Component, OnInit } from '@angular/core';
import {
  AnyForUntypedForms,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-cadastro-unidade',
  templateUrl: './cadastro-unidade.component.html',
  styleUrls: ['./cadastro-unidade.component.css'],
})
export class CadastroUnidadeComponent implements OnInit {
  constructor(private formBuiler: FormBuilder) {}
  ngOnInit(): void {}
  submitCadastro(form: any) {
    console.log(form);
  }
}
