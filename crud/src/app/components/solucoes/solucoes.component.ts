import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-solucoes',
  templateUrl: './solucoes.component.html',
  styleUrls: ['./solucoes.component.css']
})
export class SolucoesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  SolutionCreate(): void {
   this.router.navigate(['solucoes/create'])
  }

}
