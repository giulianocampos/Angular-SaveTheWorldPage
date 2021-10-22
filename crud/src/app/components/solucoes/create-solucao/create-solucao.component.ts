
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-solucao',
  templateUrl: './create-solucao.component.html',
  styleUrls: ['./create-solucao.component.css']
})
export class CreateSolucaoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  createSolucao(): void {

  }

  cancel(): void {
    this.router.navigate (['solucoes'])
  }

}
