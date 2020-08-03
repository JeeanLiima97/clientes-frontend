import { ClientesService } from './../../clientes.service';
import { Cliente } from './../cliente';
import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router'
@Component({
  selector: 'app-clientes-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.css']
})
export class ClientesFormComponent implements OnInit {

  cliente: Cliente

  sucess: boolean = false;

  errors: String[];

  id: number;

  constructor(private service: ClientesService,
    private route: Router,
    private activatedroute : ActivatedRoute) {
    this.cliente = new Cliente()

  }

  ngOnInit(): void {
   let params = this.activatedroute.params
   if(params && params.value && params.value.id){
     this.id = params.value.id;
     this.service
     .getClienteById(this.id)
     .subscribe(response=> this.cliente = response)
   }
    
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
  voltarListagem(){
    this.route.navigate(['/clientes-lista'])
  }
}
