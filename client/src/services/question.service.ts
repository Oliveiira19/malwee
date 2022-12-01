import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { QuestionComponent } from 'src/app/question/question.component';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private dialog: MatDialog) {
  }

  public ask(onConfirm : any, onCancel : any = null){
    const dialogRef = this.dialog.open(QuestionComponent, {
      width : '25rem'
    });

    dialogRef.afterClosed().subscribe(response => {
      if (response){
        onConfirm();
        return;
      } 

      if (onCancel){
        onCancel();
      }
    })
  }
}
