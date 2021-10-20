import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { QuestoesComponent } from './components/questoes/questoes.component';
import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'questoes', component: QuestoesComponent},
  { path: 'solucoes', component: SolucoesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
