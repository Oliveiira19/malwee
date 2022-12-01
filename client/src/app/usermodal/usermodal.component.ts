
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';

@Component({
  selector: 'app-usermodal',
  templateUrl: './usermodal.component.html',
  styleUrls: ['./usermodal.component.scss']
})
export class UsermodalComponent implements OnInit {

name: string = '';

  constructor(private httpService: HttpService,
              private dialofRef: MatDialogRef<UsermodalComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any ) { }

  ngOnInit(): void {
    if(this.data){
      this.name = this.data.name;
    }
  }

  async confirmClick(){
    if(!this.data){
      await this.httpService.post('user', {name: this.name});
    }
    if(this.data && this.data.id > 0){
      await this.httpService.put('user', {id: this.data.id, name: this.name});
    }
    this,this.dialofRef.close();
  }


}
