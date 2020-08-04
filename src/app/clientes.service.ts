import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Cliente } from './clientes/cliente';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  constructor(private http: HttpClient) { }


  salvar(cliente: Cliente): Observable<Cliente> {

    return this.http.post<Cliente>('http://localhost:8083/api/clientes', cliente);

  }

  atualizar(cliente: Cliente): Observable<any> {

    return this.http.put<Cliente>(`http://localhost:8083/api/clientes/${cliente.id}`, cliente);

  }


  getClientes(): Observable<Cliente[]> {
    return this.http.get<Cliente[]>('http://localhost:8083/api/clientes');
  }

  getClienteById(id: number): Observable<any> {
    return this.http.get<Cliente>(`http://localhost:8083/api/clientes/${id}`);
  }

  deletar(cliente: Cliente): Observable<any> {
    return this.http.delete<any>(`http://localhost:8083/api/clientes/${cliente.id}`);
  }


}
