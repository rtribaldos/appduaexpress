import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public auth : AuthProvider) {
   }

   ionViewDidLoad() {
     console.log('ionViewDidLoad InfoPage');
   }

   cerrarSesion(){
       this.auth.logout();
   }

}
