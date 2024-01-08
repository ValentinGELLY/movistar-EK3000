import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaPrincipalComponent } from './pagina-principal/pagina-principal.component';
import { TarificaPrepagoComponent } from './tarifica-prepago/tarifica-prepago.component';
import { AllPageMovistarComponent } from './all-page-movistar/all-page-movistar.component';


@NgModule({
  declarations: [
    AppComponent,
    PaginaPrincipalComponent,
    TarificaPrepagoComponent,
    AllPageMovistarComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
