import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Options } from './options';

@NgModule({
  declarations: [
    Options,
  ],
  imports: [
    IonicPageModule.forChild(Options),
  ],
  exports: [
    Options
  ]
})
export class OptionsModule {}
