import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-pedidomodal',
  templateUrl: './pedidomodal.component.html',
  styleUrls: ['./pedidomodal.component.scss']
})
export class PedidomodalComponent implements OnInit {

  name: string = '';
  rua: string = '';
  bairro: string = '';
  cidade: string = '';
  estado: string = '';
  pais: string = '';

  constructor(private httpSservice: HttpService,
              private dialogRef: MatDialogRef<PedidomodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any)  { }

  ngOnInit(): void {
    if(this.data){
      this.name = this.data.name;
    }
  }

  async confirmClick(){
    if(!this.data){
      await this.httpSservice.post('pedido', {name:this.name, rua: this.rua, bairro: this.bairro,
                                             cidade: this.cidade, estado: this.estado, pais: this.pais});
    }

    if(this.data && this.data.id > 0){
      await this.httpSservice.put('pedido', {id: this.data.id, name: this.name, rua: this.rua, bairro: this.bairro,
        cidade: this.cidade, estado: this.estado, pais: this.pais});
    }

    this.dialogRef.close();

  }

}
