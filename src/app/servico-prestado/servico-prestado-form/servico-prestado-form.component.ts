import { ServicoPrestadoService } from './../../servico-prestado.service';
import { ServicoPrestado } from './../servicoPrestado';
import { ClientesService } from './../../clientes.service';
import { Cliente } from './../../clientes/cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servico-prestado-form',
  templateUrl: './servico-prestado-form.component.html',
  styleUrls: ['./servico-prestado-form.component.css']
})
export class ServicoPrestadoFormComponent implements OnInit {



  clientes: Cliente[]
  servicoPrestado: ServicoPrestado;

  sucess: boolean = false;

  errors: String[];

  constructor(private clienteService: ClientesService,
    private service: ServicoPrestadoService) {
    this.servicoPrestado = new ServicoPrestado();
  }

  ngOnInit(): void {
    this.clienteService.getClientes()
      .subscribe(response => this.clientes = response);
  }

  onSubmit() {
    this.service
      .salvar(this.servicoPrestado)
      .subscribe(response => {
        this.sucess = true;
        this.errors = null;
        this.servicoPrestado = new ServicoPrestado();
      }, errorResponse => {
        this.sucess = false;
        this.errors = errorResponse.error.erros;
      }
      )

  }

}
