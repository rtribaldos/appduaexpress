import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AuthProvider } from '../providers/auth/auth';
import { RegisterPage } from '../pages/register/register';

export const firebaseConfig = {
  apiKey: "AIzaSyCb7no2ZguQECh7appTgDkrLOrwcW5_9x4",
   authDomain: "duaexpress-online.firebaseapp.com",
   databaseURL: "https://duaexpress-online.firebaseio.com",
   projectId: "duaexpress-online",
   storageBucket: "duaexpress-online.appspot.com",
   messagingSenderId: "1020292615326"
};

@NgModule({
  declarations: [
    MyApp,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider
  ]
})
export class AppModule {}
