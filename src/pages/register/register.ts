import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  user : User;
  registerForm : FormGroup;
  submitAttempt: boolean = false;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public auth : AuthProvider,
    public alertCtrl : AlertController,
    public formBuilder: FormBuilder
  ) {
    /*this.user = new User();
    this.user.email = navParams.get("emailPresent");
    this.user.password = navParams.get("passwordPresent");*/

    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  
    this.registerForm = formBuilder.group({
        email: [navParams.get("emailPresent"), Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
        password: [navParams.get("passwordPresent"), Validators.compose([Validators.maxLength(30), Validators.required])],
        name: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        cif: ['', Validators.compose([Validators.maxLength(9), Validators.pattern('[a-zA-Z]{1}[0-9]{8}'), Validators.required])],
        company: ['', Validators.compose([Validators.maxLength(50),  Validators.required])],
        address: ['', Validators.compose([Validators.maxLength(70),  Validators.required])],
        postalCode: ['', Validators.compose([Validators.maxLength(5), Validators.pattern('[0-9]{5}'), Validators.required])],
        city: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        state: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        tel: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[0-9\- ]*'), Validators.required])],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  registerUser(){

      console.log("Registering user...");
      this.submitAttempt = true;
      //this.submitAttempt = true;

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
  if (this.registerForm.valid){
    console.log("Register user " + this.registerForm.value.email + " OK");
    let alert = this.alertCtrl.create({
        title: 'OK',
        subTitle: "Usuario Creado",
        buttons: ['Aceptar']
          });
          alert.present();
  }else{
    console.log("Register user KO");
    let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: "Complete todos los datos del formulario correctamente",
        buttons: ['Aceptar']
          });
          alert.present();
  }
	
}
}
