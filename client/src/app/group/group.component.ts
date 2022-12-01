import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { QuestionService } from 'src/services/question.service';
import { GroupomodalComponent } from '../groupomodal/groupomodal.component';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.scss']
})
export class GroupComponent implements OnInit {
  public grupos : Array<any> = [];
  
  constructor(private httpService : HttpService,
              public dialog: MatDialog,
              private questionService : QuestionService) {}

  ngOnInit(): void {
    this.listar();
  }

  async listar(){
    this.grupos = await this.httpService.get('grupo');
  }

  deleteGroup(grupo : any): void {
      this.questionService.ask(async () => {
        await this.httpService.patch(`grupo/${grupo.id}`,{});
        this.listar();
      });
  }

  addButtonClick(){
    const dialogRef = this.dialog.open(GroupomodalComponent, {
      width : '25rem'
    });

    dialogRef.afterClosed().subscribe(response => {
      this.listar();
    })
  }

  editButtonClick(grupo : any){
    const dialogRef = this.dialog.open(GroupomodalComponent, {
      width : '25rem',
      data : grupo
    });

    dialogRef.afterClosed().subscribe(response => {
      this.listar();
    })    
  }

};


 



