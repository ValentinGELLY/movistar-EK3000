import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { PrepaidTariffsComponent } from './prepaid-tariffs/prepaid-tariffs.component';
import { FullPrepaymentComponent } from './full-prepayment/full-prepayment.component';

const routes: Routes = [
  { path: '', redirectTo: '/pagina-principal', pathMatch: 'full' },
  { path: 'pagina-principal', component: PaginaPrincipalComponent },
  { path: 'full-prepayment', component: FullPrepaymentComponent },
  { path: 'prepaid-tariffs', component: PrepaidTariffsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
