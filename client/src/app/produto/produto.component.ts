import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { QuestionService } from 'src/services/question.service';
import { ProdutomodalComponent } from '../produtomodal/produtomodal.component';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.scss']
})
export class ProdutoComponent implements OnInit {
  public produtos : Array<any> = [];

  constructor(private httpService : HttpService,
              public dialog: MatDialog,
              private questionService : QuestionService) { }

  ngOnInit(): void {
    this.listar();
  }
  async listar(){
    this.produtos = await this.httpService.get('produto');
  }
  deleteProduto(produto: any): void{
    this.questionService.ask(async () => {
      await this.httpService.patch(`produto/${produto.id}`,{});
      this.listar();
    });
  }
addButtonClick(){
  const dialogRef = this.dialog.open(ProdutomodalComponent, {
    width: '25rem'
  });

dialogRef.afterClosed().subscribe(response =>{
  this.listar();  
})
}

editButtonClick(produto: any){
const dialogRef = this.dialog.open(ProdutomodalComponent, {
  width: '25rem',
  data: produto
});
}
};
