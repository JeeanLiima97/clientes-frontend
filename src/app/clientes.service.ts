import { environment } from './../environments/environment';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }

  apiURL: string = environment.apiURL +'/api/clientes';
  salvar(cliente: Cliente): Observable<Cliente> {

    return this.http.post<Cliente>( `${this.apiURL}`, cliente);

  }

  atualizar(cliente: Cliente): Observable<any> {

    return this.http.put<Cliente>(`${this.apiURL}/${cliente.id}`, cliente);

  }


  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>(`${this.apiURL} `);
  }

  getClienteById(id: number): Observable<any> {
    return this.http.get<Cliente>(`${this.apiURL}/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`${this.apiURL}/${cliente.id}`);
  }


}
