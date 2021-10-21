import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { QuestoesComponent } from './components/questoes/questoes.component';
import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { RouterModule } from '@angular/router';

import { SaibaMais1Component } from './components/saiba-mais1/saiba-mais1.component';
import { SaibaMais2Component } from './components/saiba-mais2/saiba-mais2.component';
import { SaibaMais3Component } from './components/saiba-mais3/saiba-mais3.component';
import { CreateSolucaoComponent } from './components/solucoes/create-solucao/create-solucao.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    QuestoesComponent,
    SolucoesComponent,
    SaibaMais1Component,
    SaibaMais2Component,
    SaibaMais3Component,
    CreateSolucaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
