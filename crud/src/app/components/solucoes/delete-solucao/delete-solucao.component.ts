import { ActivatedRoute, Router } from '@angular/router';
import { SolucaoService } from './../solucao.service';
import { Solution } from './../solution.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-solucao',
  templateUrl: './delete-solucao.component.html',
  styleUrls: ['./delete-solucao.component.css']
})
export class DeleteSolucaoComponent implements OnInit {

  solution: Solution

  constructor(private solucaoService: SolucaoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.solucaoService.readById(id).subscribe(solution => {
      this.solution=solution
    });
  }

  deleteSolucao(): void {
    this.solucaoService.delete(this.solution.id).subscribe (() => {
      this.solucaoService.showMessage("Solução excluída com sucesso!")
      this.router.navigate(['/solucoes'])
    });
  }

  cancel(): void {
    this.router.navigate (['/solucoes']);
  }

}
