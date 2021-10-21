import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questoes',
  templateUrl: './questoes.component.html',
  styleUrls: ['./questoes.component.css']
})
export class QuestoesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  saibaMais() {
    this.router.navigate (['/saiba-mais'])
  }
  saibaMaiss() {
    this.router.navigate (['saiba-mais2'])
  }
  saibaMaisss() {
    this.router.navigate (['saiba-mais3'])
  }

}
