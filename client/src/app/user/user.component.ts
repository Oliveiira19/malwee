import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { QuestionService } from 'src/services/question.service';
import { ClientemodalComponent } from '../clientemodal/clientemodal.component';
import { UsermodalComponent } from '../usermodal/usermodal.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  public user: Array<any> = [];

  constructor(private httpService: HttpService,
              public dialog: MatDialog,
              private questionService: QuestionService) { }

  ngOnInit(): void {
    this.listar();
  }
async listar(){
  this.user = await this.httpService.get('user');
}
deleteUser(user: any): void{
  this.questionService.ask(async() => {
    await this.httpService.patch(`user/${user.id}`,{});
    this.listar();
  });
}

addButtonClick(){
  const dialogRef = this.dialog.open(UsermodalComponent, {
    width: '25rem'
  });
  dialogRef.afterClosed().subscribe(response => {
    this.listar();
  })
}

  editButtonClick(user: any){
    const dialogRef = this.dialog.open(UsermodalComponent, {
       width: '25rem',
       data: user
    });

  dialogRef.afterClosed().subscribe(resonse => {
    this.listar();
  })
}

};