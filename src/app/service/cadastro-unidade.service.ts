import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { observable, Observable } from 'rxjs';
import { CadastroUnidadeModel } from 'src/app/model/cadastroUnidadeModel';
import { environment } from 'src/environments/environment';
import { tap, delay, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CadastroUnidadeService {
  private readonly API = 'http://localhost:3000/unidades';

  constructor(private http: HttpClient) {}
  list() {
    return this.http.get<CadastroUnidadeModel[]>(this.API);
  }

  loadId(id: string) {
    return this.http.get(`${this.API}/editar/${id}`).pipe(take(1));
  }
  criarUnidade(unidade: CadastroUnidadeModel) {
    return this.http.post(this.API, unidade).pipe(take(1));
  }
}
