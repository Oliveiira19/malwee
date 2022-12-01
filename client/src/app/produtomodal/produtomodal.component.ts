import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';


@Component({
  selector: 'app-produtomodal',
  templateUrl: './produtomodal.component.html',
  styleUrls: ['./produtomodal.component.scss']
})
export class ProdutomodalComponent implements OnInit {
  
  public produto : Array<any> = [];
  name : string = '';

  constructor(private httpService : HttpService,
    private dialogRef: MatDialogRef<ProdutomodalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
   if(!this.data){
      this.name = this.data.name;
   }

  }
async confirmClick(){
if(!this.data){
  await this.httpService.post('produto', {name: this.name});
}

if(this.data && this.data.id > 0){
  await this.httpService.put('produto', {id: this.data.id, name: this.name});
}

this.dialogRef.close();

}

}
