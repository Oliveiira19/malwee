import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';
import { QuestionService } from 'src/services/question.service';
import { CepComponent } from '../cep/cep.component';
import { ClientemodalComponent } from '../clientemodal/clientemodal.component';

interface Idade {
  value: string;
  viewValue: string;
}


@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.scss']
})
export class ClienteComponent implements OnInit {
public cliente : Array<any> = [];


  
    constructor( private httpService : HttpService,
                public dialog: MatDialog,
                private questionService: QuestionService) { }
  
    ngOnInit(): void {
      this.listar();
    }
  async listar(){
    this.cliente = await this.httpService.get('cliente');
  }
  deleteCliente(cliente: any): void{
    this.questionService.ask(async() =>{
      await this.httpService.patch(`cliente/${cliente.id}`,{});
      this.listar();
    });
  }

  addButtonClick(){
    const dialogRef = this.dialog.open(ClientemodalComponent, {
      width: '25rem'
    });

    dialogRef.afterClosed().subscribe(response => {
      this.listar();
    })
  }

  editButtonClick(cliente: any){
    const dialogRef = this.dialog.open(ClientemodalComponent, {
      width: '25rem',
      data: cliente
    });

    dialogRef.afterClosed().subscribe(response => {
      this.listar();
    })
  }

  addButtonCEP(cliente: any){
    const dialogRef = this.dialog.open(CepComponent, {
      width: '25rem',
      data: cliente
    });
  }

  };
 
