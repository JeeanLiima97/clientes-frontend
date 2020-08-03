import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente
  nome: string = 'Fulano'
  constructor() {

    this.cliente = new Cliente();
  }

  ngOnInit(): void {
  }
  onSubmit() {
    console.log(this.cliente);

  }
}
