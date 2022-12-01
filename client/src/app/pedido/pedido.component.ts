import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { QuestionService } from 'src/services/question.service';
import { PedidomodalComponent } from '../pedidomodal/pedidomodal.component';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.scss']
})
export class PedidoComponent implements OnInit {

  public pedidos : Array<any> = [];

  constructor(private httpService: HttpService,
              public dialog: MatDialog,
              private questionService: QuestionService) { }

  ngOnInit(): void {
    this.listar();
  }
  async listar(){
    this.pedidos = await this.httpService.get('pedido');
  }

  deletePedido(pedido: any): void{
    this.questionService.ask(async () => {
      await this.httpService.patch(`pedido/${pedido.id}`,{});
      this.listar();
    });
  }

  addButtonClick(){
    const dialogRef = this.dialog.open(PedidomodalComponent, {
      width: '25rem'
    });

    dialogRef.afterClosed().subscribe(response => {
      this.listar();
    })
  }

  editButtonClick(pedido: any){
    const dialogRef = this.dialog.open(PedidomodalComponent, {
      width: '25rem',
      data: pedido
    });

    dialogRef.afterClosed().subscribe(response => {
      this.listar();
    })
  }

};  
