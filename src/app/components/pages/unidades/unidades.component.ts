import { preserveWhitespacesDefault } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { CadastroUnidadeService } from 'src/app/service/cadastro-unidade.service';
import { CadastroUnidadeModel } from 'src/app/model/cadastroUnidadeModel';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-unidades',
  templateUrl: './unidades.component.html',
  styleUrls: ['./unidades.component.css'],
})
export class UnidadesComponent implements OnInit {
  unidades!: CadastroUnidadeModel[];
  unidades$!: Observable<CadastroUnidadeModel[]>;
  constructor(
    private cadastroUnidadeService: CadastroUnidadeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.unidades$ = this.cadastroUnidadeService.list();
  }
  editar(id: string) {
    console.log('editar');
    this.router.navigate(['editar', id]);
  }
}
