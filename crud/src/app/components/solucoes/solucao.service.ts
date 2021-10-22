import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class SolucaoService {

  constructor(private snackBar: MatSnackBar) {}

  showMessage(msg: string): void {
    this.snackBar.open(msg, '', {
      
    })
  }

}
