import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../services/client.service';
import { Cliente } from '../models/client.model';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html'
})
export class ClientListComponent implements OnInit {
  clientes: Cliente[] = [];

  constructor(private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.getClientes().subscribe(data => {
      this.clientes = data;
    });
  }

  deleteCliente(id: number): void {
    if (confirm('Tem certeza que deseja excluir este cliente?')) {
      this.clienteService.deleteCliente(id).subscribe(() => {
        this.clientes = this.clientes.filter(cliente => cliente.id !== id);
      });
    }
  }
}
