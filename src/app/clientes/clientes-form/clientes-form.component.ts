import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente

  sucess: boolean = false;

  errors: String[];

  constructor(private service: ClientesService) {
    this.cliente = new Cliente()

  }

  ngOnInit(): void {
  }
  onSubmit() {
    this.service.salvar(this.cliente)
      .subscribe(response => {
        this.sucess = true;
        this.errors = null;
        this.cliente = response;
      }, errorResponse => {
        this.sucess = false;
        this.errors = errorResponse.error.erros; 


      }
      )

  }
}
