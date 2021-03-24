import { Component } from '@angular/core';
import { ReqqqService } from '../api/reqqq.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  kontaks = [];

  constructor(private reqqqService: ReqqqService) {
    this.reqqqService.getKontaks().subscribe(response => {
      this.kontaks = response;
      console.log(response)
    })
  }
  delete(id){
    this.reqqqService.deleteData(id).subscribe(response => {
      //this.kontaks = response;
      console.log(response)
    })
    console.log(id)
  }

}
