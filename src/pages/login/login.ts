import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register';


/**
 * Generated class for the LoginPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user: User;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public auth : AuthProvider,
    public alertCtrl : AlertController
  ) {
       this.user = new User();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');

  }

  login()
  {
    this.auth.loginUser(this.user.email,this.user.password ).then((user) => {
      console.log('autenticado');
    })
     .catch(err=>{
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: err.message,
        buttons: ['Aceptar']
      });
      alert.present();
    })
  }

  signin(){
    this.navCtrl.push(RegisterPage,{
       emailPresent: this.user.email,
       passwordPresent: this.user.password
    });

 /*   this.auth.registerUser(this.user.email,this.user.password).then((user) => {
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
  }

}
