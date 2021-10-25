import { Solution } from './../solution.model';
import { SolucaoService } from './../solucao.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-solucao',
  templateUrl: './create-solucao.component.html',
  styleUrls: ['./create-solucao.component.css']
})
export class CreateSolucaoComponent implements OnInit {

  solution: Solution = {
    name: '',
    explicacao: ''
  }

  constructor(private router: Router, private solucaoService: SolucaoService) { }

  ngOnInit(): void {

  }

  createSolucao(): void {
    this.solucaoService.create(this.solution).subscribe(() => {
      this.solucaoService.showMessage ("Solução criada!")
      this.router.navigate (['solucoes'])
    })

  }

  cancel(): void {
    this.router.navigate (['solucoes'])
  }

}
