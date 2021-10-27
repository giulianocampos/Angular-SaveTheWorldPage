import { DeleteSolucaoComponent } from './components/solucoes/delete-solucao/delete-solucao.component';
import { UpdateSolucaoComponent } from './components/solucoes/update-solucao/update-solucao.component';
import { CreateSolucaoComponent } from './components/solucoes/create-solucao/create-solucao.component';
import { SaibaMais3Component } from './components/saiba-mais3/saiba-mais3.component';
import { SaibaMais2Component } from './components/saiba-mais2/saiba-mais2.component';
import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { QuestoesComponent } from './components/questoes/questoes.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SaibaMais1Component } from './components/saiba-mais1/saiba-mais1.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'questoes', component: QuestoesComponent},
  { path: 'solucoes', component: SolucoesComponent},
  { path: 'saiba-mais', component: SaibaMais1Component},
  { path: 'saiba-mais2', component: SaibaMais2Component},
  { path: 'saiba-mais3', component: SaibaMais3Component},
  { path: 'solucoes/create', component: CreateSolucaoComponent},
  { path: 'solucoes/update/:id', component: UpdateSolucaoComponent},
  { path: 'solucoes/delete/:id', component: DeleteSolucaoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
