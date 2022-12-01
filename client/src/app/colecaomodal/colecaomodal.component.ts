import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-colecaomodal',
  templateUrl: './colecaomodal.component.html',
  styleUrls: ['./colecaomodal.component.scss']
})
export class ColecaomodalComponent implements OnInit {

  name: string = '';

  constructor(private httpService : HttpService,
     private dialogRef : MatDialogRef<ColecaomodalComponent>,
      @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if(this.data){
      this.name = this.data.name;
    }
  }

async confirmClick(){
  debugger
  if(!this.data){
    await this.httpService.post('colecao', {name: this.name});
  }

if(this.data && this.data.id > 0){
  await this.httpService.put('colecao', {id: this.data.id, name: this.name});
}

this.dialogRef.close();
}

}
