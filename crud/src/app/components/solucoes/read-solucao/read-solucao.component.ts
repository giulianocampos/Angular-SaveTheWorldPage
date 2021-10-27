import { SolucaoService } from './../solucao.service';
import { Solution } from './../solution.model';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-read-solucao',
  templateUrl: './read-solucao.component.html',
  styleUrls: ['./read-solucao.component.css']
})
export class ReadSolucaoComponent implements OnInit {


  solution: Solution[];
  displayedColumns = ['id', 'name', 'action'];

  constructor(private solucaoService: SolucaoService) { }

  ngOnInit(): void {
    this.solucaoService.read().subscribe(solution => {
      this.solution = solution
      console.log(solution)
    })
  }

  

}
