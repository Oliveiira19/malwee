import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-groupomodal',
  templateUrl: './groupomodal.component.html',
  styleUrls: ['./groupomodal.component.scss']
})
export class GroupomodalComponent implements OnInit {

  name : string = '';
  

  constructor(private httpService : HttpService, 
              private dialogRef: MatDialogRef<GroupomodalComponent>, 
              @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data){
      this.name = this.data.name.cor.tamanho;
    }
  }

  async confirmClick(){
    if (!this.data){
      await this.httpService.post('grupo',{name: this.name});
    }

    if (this.data && this.data.id > 0){
      await this.httpService.put('grupo',{id : this.data.id, name: this.name});
    }
    
    this.dialogRef.close();
  }
}
