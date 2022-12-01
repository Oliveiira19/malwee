import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';  
import { HttpService } from 'src/services/http.service';
import { QuestionService } from 'src/services/question.service';
import { SubgroupomodalComponent } from '../subgroupomodal/subgroupomodal.component';


@Component({
  selector: 'app-subgroup',
  templateUrl: './subgroup.component.html',
  styleUrls: ['./subgroup.component.scss']
})
export class SubgroupComponent implements OnInit {

subGrupos: Array<any> = [];

  constructor(
              private httpService : HttpService,
              public dialog: MatDialog,  
              private questionService : QuestionService) { }

  ngOnInit(): void {
    this.listar();
  }
async listar(){
  this.subGrupos = await this.httpService.get('subgrupo');
  console.log(this.subGrupos);
}
deleteSubGroup(subGrupo : any): void {
  this.questionService.ask(async() => {
    await this.httpService.patch(`subGrupo/${subGrupo.id}`,{});
    this.listar();
  });
}

addButtonClick(){
  const dialogRef = this.dialog.open(SubgroupomodalComponent, {
    width : '25rem'
  });

  dialogRef.afterClosed().subscribe(Response =>{
    this.listar();
  })
}

editButtonClick(subGrupo : any){
  const dialogRef = this.dialog.open(SubgroupComponent, {
    width: '25rem',
    data: subGrupo
  });
dialogRef.afterClosed().subscribe(Response => {
  this.listar();
})
}

};
