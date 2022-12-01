import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { QuestionService } from 'src/services/question.service';
import { ColecaomodalComponent } from '../colecaomodal/colecaomodal.component';

@Component({
  selector: 'app-colecao',
  templateUrl: './colecao.component.html',
  styleUrls: ['./colecao.component.scss']
})
export class ColecaoComponent implements OnInit {

 public colecao : Array<any> = [];
  
  constructor(private httpService : HttpService,
              public dialog: MatDialog,
              private questionService : QuestionService) { }

  ngOnInit(): void {
    this.listar();
  }
 async listar(){
  this.colecao = await this.httpService.get('colecao');
  console.log(this.colecao);
 }

 deleteColecao(colecao : any): void {
  this.questionService.ask(async() =>  {
    await this.httpService.patch(`colecao/${colecao.id}`,{});
    this.listar();
  });
  }

  addButtonClick(){
    const dialogRef = this.dialog.open(ColecaomodalComponent, {
      width: '25rem'
    });

    dialogRef.afterClosed().subscribe(Response => {
      this.listar();
    })
  }
  
  editButtonClick(colecao : any){
    const dialogRef = this.dialog.open(ColecaoComponent, {
      width: '25rem',
      data: colecao
    });
    
    dialogRef.afterClosed().subscribe(Response =>{
      this.listar();
    })
  }

 };
  

