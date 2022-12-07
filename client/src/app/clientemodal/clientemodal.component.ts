import { Component, Inject ,IterableDiffers,OnInit } from '@angular/core';
import { MatDatepickerControl, MatDatepickerPanel } from '@angular/material/datepicker/datepicker-base';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';


@Component({
  selector: 'app-clientemodal',
  templateUrl: './clientemodal.component.html',
  styleUrls: ['./clientemodal.component.scss']
})
export class ClientemodalComponent implements OnInit {
 
  idade: number | undefined ;
  name : string = '';
  rua: string = '';
  cep: number | undefined ;
  bairro: string = '';
  cidade: string = '';
  pais: string = '';
  clienteDesde: number | undefined;

  constructor(private httpService: HttpService,
              private dialogRef: MatDialogRef<ClientemodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data){
      this.name = this.data.name;
    }
  }

  async confirmClick(){
    if(!this.data){
      await this.httpService.post('cliente', {name: this.name, rua: this.rua, idade: this.idade});
    }

    if(this.data && this.data.id > 0){
      await this.httpService.put('cliente', {id: this.data.id, name: this.name, rua: this.rua, idade: this.idade});
    }
    this.dialogRef.close();

  }

  consultaCep(){
    let cep = this.httpService.get('endereco.cep');
  }

}
