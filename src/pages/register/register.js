var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { User } from '../../models/user';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function () {
    function RegisterPage(navCtrl, navParams, auth, alertCtrl, formBuilder) {
        /*this.user = new User();
        this.user.email = navParams.get("emailPresent");
        this.user.password = navParams.get("passwordPresent");*/
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.alertCtrl = alertCtrl;
        this.formBuilder = formBuilder;
        this.submitAttempt = false;
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.registerForm = formBuilder.group({
            email: [navParams.get("emailPresent"), Validators.compose([Validators.maxLength(50), Validators.pattern(emailRegex), Validators.required])],
            password: [navParams.get("passwordPresent"), Validators.compose([Validators.maxLength(30), Validators.required])],
            name: ['', Validators.compose([Validators.maxLength(70), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            cif: ['', Validators.compose([Validators.maxLength(9), Validators.pattern('[a-zA-Z]{1}[0-9]{8}'), Validators.required])],
            company: ['', Validators.compose([Validators.maxLength(50), Validators.required])],
            address: ['', Validators.compose([Validators.maxLength(70), Validators.required])],
            postalCode: ['', Validators.compose([Validators.maxLength(5), Validators.pattern('[0-9]{5}'), Validators.required])],
            city: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            state: ['', Validators.compose([Validators.maxLength(50), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
            tel: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[0-9\- ]*'), Validators.required])],
        });
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.registerUser = function () {
        var _this = this;
        console.log("Registering user...");
        this.submitAttempt = true;
        if (this.registerForm.valid) {
            console.log("User " + this.registerForm.value.email + " validation OK");
            this.auth.registerUser(this.registerForm.value.email, this.registerForm.value.password).then(function (user) {
                console.log("User auth " + _this.registerForm.value.email + " registered OK");
            })
                .catch(function (err) {
                var alert = _this.alertCtrl.create({
                    title: 'Error',
                    subTitle: err.message,
                    buttons: ['Aceptar']
                });
                alert.present();
            });
            /*let alert = this.alertCtrl.create({
                title: 'OK',
                subTitle: "Usuario Creado",
                buttons: ['Aceptar']
                  });
                  alert.present();*/
        }
        else {
            console.log("User registretation KO");
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: "Complete todos los datos del formulario correctamente",
                buttons: ['Aceptar']
            });
            alert_1.present();
        }
    };
    RegisterPage.prototype.getUserFromFromGroup = function (paramFormGroup) {
        var user = new User();
        user.email = paramFormGroup.value.email;
        user.active = true;
        user.name = paramFormGroup.value.name;
        user.cif = paramFormGroup.value.cif;
        user.company = this.registerForm.value.company;
        /* tel: string;
      address: string;
      postalCode: string;
      city: string;
      state: string;
      profile: Profile;*/
    };
    RegisterPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-register',
            templateUrl: 'register.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            AuthProvider,
            AlertController,
            FormBuilder])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.js.map