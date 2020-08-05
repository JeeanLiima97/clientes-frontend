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

  constructor(private clienteService: ClientesService) {
    this.servicoPrestado = new ServicoPrestado();
   }

  ngOnInit(): void {
    this.clienteService.getClientes()
    .subscribe(response =>this.clientes=response);
  }
  onSubmit(){
    console.log(this.servicoPrestado);
    
  }

}
