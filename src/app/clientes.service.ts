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

  getCliente(): Cliente {
    let cliente: Cliente = new Cliente();
    cliente.nome = 'Fulano'
    cliente.cpf = '432142343'
    return cliente;
  }



}
