import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SavedProfile } from './saved-profile';

@NgModule({
  declarations: [
    SavedProfile,
  ],
  imports: [
    IonicPageModule.forChild(SavedProfile),
  ],
  exports: [
    SavedProfile
  ]
})
export class SavedProfileModule {}
