import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { AllPageMovistarComponent } from './all-page-movistar/all-page-movistar.component';
import { FullPrepaymentComponent } from './full-prepayment/full-prepayment.component';
import { PrepaidTariffsComponent } from './prepaid-tariffs/prepaid-tariffs.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    AllPageMovistarComponent,
    FullPrepaymentComponent,
    PrepaidTariffsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
