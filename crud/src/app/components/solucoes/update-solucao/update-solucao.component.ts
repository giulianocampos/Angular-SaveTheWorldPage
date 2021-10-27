import { Solution } from './../solution.model';
import { ActivatedRoute, Router } from '@angular/router';
import { SolucaoService } from './../solucao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-solucao',
  templateUrl: './update-solucao.component.html',
  styleUrls: ['./update-solucao.component.css']
})
export class UpdateSolucaoComponent implements OnInit {

  solution: Solution;

  constructor(private solucaoService: SolucaoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
      this.solucaoService.readById(id).subscribe(solution => {
        this.solution = solution
      });
  }

  updateSolucao(): void {
    this.solucaoService.update(this.solution).subscribe(() => {
      this.solucaoService.showMessage("Solucão atualizada com sucesso!")
      this.router.navigate(['/solucoes'])
    });
  }

  cancel(): void {
    this.router.navigate(['/solucoes'])
  }

}
