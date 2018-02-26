import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AngularFireList, AngularFireDatabase, AngularFireObject} from 'angularfire2/database';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';
import { Profile} from '../../models/global.enum';

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

  //user : User;
  users: AngularFireList<any>;

  registerForm : FormGroup;
  submitAttempt: boolean = false;
  localUser: any;

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public auth : AuthProvider,
    public alertCtrl : AlertController,
    public formBuilder: FormBuilder,
    public database: AngularFireDatabase
  ) {
    /*this.user = new User();
    this.user.email = navParams.get("emailPresent");
    this.user.password = navParams.get("passwordPresent");*/
    this.users = this.database.list('/users');

    let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
  
    this.registerForm = formBuilder.group({
        email: [navParams.get("emailPresent"), Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
        password: [navParams.get("passwordPresent"), Validators.compose([Validators.maxLength(30), Validators.required])],
        name: ['', Validators.compose([Validators.maxLength(70), Validators.required])],
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

    if (this.registerForm.valid){

        this.auth.registerUser(this.registerForm.value.email,this.registerForm.value.password).then(
        (success) => {
          console.log(success);
          this.localUser = JSON.parse(window.localStorage.getItem('user'));

          let user = new User();
          user.email = this.localUser.email;
          user.active = true;
          user.address = this.registerForm.value.address;
          user.cif = this.registerForm.value.cif;
          user.city = this.registerForm.value.city;
          user.company = this.registerForm.value.company;
          user.name = this.registerForm.value.name;
          user.postalCode = this.registerForm.value.postalCode;
          user.state = this.registerForm.value.state;
          user.tel = this.registerForm.value.tel;

          this.users.push({
              uid : this.localUser.uid,
              email : this.localUser.email,
              active : true,
              address : this.registerForm.value.address,
              cif : this.registerForm.value.cif,
              city : this.registerForm.value.city,
              company : this.registerForm.value.company,
              name : this.registerForm.value.name,
              postalCode : this.registerForm.value.postalCode,
              state : this.registerForm.value.state,
              tel : this.registerForm.value.tel
        });


        });


    }else{
      console.log("User registration KO");
      let alert = this.alertCtrl.create({
         title: 'Error',
         subTitle: "Complete todos los datos del formulario correctamente",
         buttons: ['Aceptar']
         });
         alert.present();
    }
  }

}
