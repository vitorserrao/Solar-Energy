import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  AnyForUntypedForms,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CadastroUnidadeModel } from 'src/app/model/cadastroUnidadeModel';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastroUnidadeService } from 'src/app/service/cadastro-unidade.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
import { Location } from '@angular/common';

@Component({
  selector: 'app-cadastro-unidade',
  templateUrl: './cadastro-unidade.component.html',
  styleUrls: ['./cadastro-unidade.component.css'],
})
export class CadastroUnidadeComponent implements OnInit {
  public unidade: CadastroUnidadeModel = new CadastroUnidadeModel();

  constructor(
    private formBuiler: FormBuilder,
    private cadastroUnidadeService: CadastroUnidadeService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      const id = params['id'];
      console.log(id);
      const unidade$ = this.cadastroUnidadeService.loadId(id);
      unidade$.subscribe();
    });
  }
  submitCadastro(form: any) {
    console.log(form.value);
    this.cadastroUnidadeService.criarUnidade(form.value).subscribe();
    this.router.navigate(['unidades']);
    var formC = form.value;
  }
}
