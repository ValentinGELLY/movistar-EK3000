import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TarificaPrepagoComponent } from './tarifica-prepago/tarifica-prepago.component';

const routes: Routes = [
  { path: '', redirectTo: '/pagina-principal', pathMatch: 'full' },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'tarifica-prepago', component: TarificaPrepagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
