import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from '../services/client.service';
import { Cliente } from '../models/client.model';

@Component({
  selector: 'app-client-form',
  templateUrl: './client-form.component.html'
})
export class ClientFormComponent implements OnInit {
  cliente: Cliente = new Cliente();
  isEditMode = false;

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEditMode = true;
      this.clienteService.getCliente(+id).subscribe(data => {
        this.cliente = data;
      });
    }
  }

  saveCliente(): void {
    if (this.isEditMode) {
      this.clienteService.updateCliente(this.cliente).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
    } else {
      this.clienteService.createCliente(this.cliente).subscribe(() => {
        this.router.navigate(['/clientes']);
      });
    }
  }
}
