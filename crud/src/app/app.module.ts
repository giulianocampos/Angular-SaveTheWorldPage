import { MatSnackBarModule} from '@angular/material/snack-bar'
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatCardModule } from '@angular/material/card'


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
import { ReadSolucaoComponent } from './components/solucoes/read-solucao/read-solucao.component';
import { SchematicsSolucaoComponent } from './components/solucoes/schematics-solucao/schematics-solucao.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { UpdateSolucaoComponent } from './components/solucoes/update-solucao/update-solucao.component';
import { DeleteSolucaoComponent } from './components/solucoes/delete-solucao/delete-solucao.component';

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
    CreateSolucaoComponent,
    ReadSolucaoComponent,
    SchematicsSolucaoComponent,
    UpdateSolucaoComponent,
    DeleteSolucaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
