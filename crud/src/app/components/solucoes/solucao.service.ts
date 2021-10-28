import { catchError, map } from 'rxjs/operators';
import { Solution } from './solution.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'
import { EMPTY, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SolucaoService {

  baseUrl= "http://localhost:3001/solutions"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) {}

  showMessage(msg: string, isError: boolean = false): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: isError ? ['msg-error'] : ['msg-success']
    });
  }

  //abaixo segue a primeira interação com o Backend. http é a propriedade utilizada para se relacionar com o back. o método post significa a adição de algo.

  create(solution: Solution): Observable<Solution> {
    return this.http.post<Solution>(this.baseUrl, solution).pipe
    (map ((obj) => obj),
    catchError((e) => this.errorHandler(e))
      );
  }

errorHandler(e: any): Observable<any> {
  this.showMessage('Ocorreu um erro!', true);
  return EMPTY
}

  read(): Observable<Solution[]> {
    return this.http.get<Solution[]>(this.baseUrl).pipe
    (map ((obj) => obj),
    catchError((e) => this.errorHandler(e))
      );
  }

  readById(id: string): Observable<Solution> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Solution>(url).pipe
    (map ((obj) => obj),
    catchError((e) => this.errorHandler(e))
      );
  }

  update(solution: Solution): Observable<Solution> {
    const url = `${this.baseUrl}/${solution.id}`
    return this.http.put<Solution>(url, solution).pipe
    (map ((obj) => obj),
    catchError((e) => this.errorHandler(e))
      );
  }
  delete(id: number): Observable<Solution>{
    const url= `${this.baseUrl}/${id}`;
    return this.http.delete<Solution>(url).pipe
    (map ((obj) => obj),
    catchError((e) => this.errorHandler(e))
      );
  }

}
