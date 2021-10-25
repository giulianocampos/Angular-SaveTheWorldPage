import { Solution } from './solution.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolucaoService {

  baseUrl= "http://localhost:3001/solutions"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  //abaixo segue a primeira interação com o Backend. http é a propriedade utilizada para se relacionar com o back. o método post significa a adição de algo.

  create(solution: Solution): Observable<Solution> {
    return this.http.post<Solution>(this.baseUrl, solution)
  }

  read(): Observable<Solution[]> {
    return this.http.get<Solution[]>(this.baseUrl)
  }

}
