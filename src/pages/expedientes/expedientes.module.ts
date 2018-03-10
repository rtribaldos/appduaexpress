import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ExpedientesPage } from './expedientes';

@NgModule({
  declarations: [
    ExpedientesPage,
  ],
  imports: [
    IonicPageModule.forChild(ExpedientesPage),
  ],
})
export class ExpedientesPageModule {}
