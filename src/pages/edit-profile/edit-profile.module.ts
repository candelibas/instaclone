import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProfile } from './edit-profile';

@NgModule({
  declarations: [
    EditProfile,
  ],
  imports: [
    IonicPageModule.forChild(EditProfile),
  ],
  exports: [
    EditProfile
  ]
})
export class EditProfileModule {}
