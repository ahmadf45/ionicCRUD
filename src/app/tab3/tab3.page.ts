import { Component } from '@angular/core';
import { Toast } from '@capacitor/core';
import { NavController, ToastController } from '@ionic/angular';
import { ReqqqService } from '../api/reqqq.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  
})
export class Tab3Page {
  nama:string ="";
  no_hp:string ="";
  email:string ="";

  constructor(private reqqqService: ReqqqService, public toastController: ToastController, private router: Router) {
  }

  getNama(nm : string){
    this.nama = nm['detail'].value;
    //console.log(this.nama)
  }

  getNo_hp(nh : string){
    this.no_hp = nh['detail'].value;
    //console.log(this.no_hp)
  }

  getEmail(em : string){
    this.email = em['detail'].value;
    //console.log(this.email)
  }

  save(){
    this.reqqqService.pushData(this.nama,this.no_hp, this.email).subscribe(async response =>{
      if (response['status'] = 200) {
        (await this.toastController.create({
          message: 'Sukses.',
          duration: 2000
        })).present();
        this.router.navigate(['./tab2']);
        
      } else {
        (await this.toastController.create({
          message: 'Gagal.',
          duration: 2000
        })).present();
      }
      console.log(response);
    })
  }
}
