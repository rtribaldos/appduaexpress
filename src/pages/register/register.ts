import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user : User
  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public auth : AuthProvider,
    public alertCtrl : AlertController
  ) {
    this.user = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){

  	  /*this.auth.registerUser(this.user).then((user) => {
      // El usuario se ha creado correctamente
    })
    .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
	*/

	let alert = this.alertCtrl.create({
        title: 'Usuario Creado',
        subTitle: "Usuario Crerado",
        buttons: ['Aceptar']
      });
      alert.present();
  }


}
