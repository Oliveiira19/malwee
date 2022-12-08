  import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpService } from 'src/services/http.service';


@Component({
  selector: 'app-subgroupomodal',
  templateUrl: './subgroupomodal.component.html',
  styleUrls: ['./subgroupomodal.component.scss']
})
export class SubgroupomodalComponent implements OnInit {
  
  name: string = '';

  constructor(private httpService : HttpService, 
    private dialogRef: MatDialogRef<SubgroupomodalComponent>, 
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
    if (this.data){
      this.name = this.data.name;
    }
  
  }

  
  async confirmClick(){
    if (!this.data){
      await this.httpService.post('subGrupo',{name: this.name});
    }

    if (this.data && this.data.id > 0){
      await this.httpService.put('subGrupo',{id : this.data.id, name: this.name});
    }
    this.dialogRef.close();
  }

}
