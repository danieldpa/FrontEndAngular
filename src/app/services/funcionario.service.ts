import { Funcionario } from './../models/Funcionario';
import { Response } from './../models/Response';
import { HttpClient } from '@angular/common/http';

import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private apiUrl = `${environment.ApiUrl}/Funcionario`

  constructor(private http: HttpClient) { }

  GetFuncionarios() : Observable<Response<Funcionario[]>> {
    return this.http.get<Response<Funcionario[]>>(this.apiUrl);
  }

  GetFuncionario(id: Number) : Observable<Response<Funcionario>> {
    return this.http.get<Response<Funcionario>>(`${this.apiUrl}/${id}`);
  }

  CreateFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>> {
    return this.http.post<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }

  EditFuncionario(funcionario: Funcionario) : Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}`, funcionario);
  }

  InativaFuncionario(id: Number) : Observable<Response<Funcionario[]>> {
    return this.http.put<Response<Funcionario[]>>(`${this.apiUrl}/inativaFuncionario?id=${id}`,id);
  }
}
