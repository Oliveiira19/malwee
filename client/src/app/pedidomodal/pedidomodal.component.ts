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
      await this.httpSservice.post('pedido', {name:this.name});
    }

    if(this.data && this.data.id > 0){
      await this.httpSservice.put('pedido', {id: this.data.id, name: this.name});
    }

    this.dialogRef.close();

  }

}
