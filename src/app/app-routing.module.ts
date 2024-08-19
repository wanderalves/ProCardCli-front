import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientListComponent } from './cliente/client-list.component';
import { ClientFormComponent } from './cliente/client-form.component';

const routes: Routes = [
  { path: 'clientes', component: ClientListComponent },
  { path: 'clientes/new', component: ClientFormComponent },
  { path: 'clientes/edit/:id', component: ClientFormComponent },
  { path: '', redirectTo: '/clientes', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
