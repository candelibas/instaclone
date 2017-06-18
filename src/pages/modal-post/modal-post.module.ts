import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ModalPost } from './modal-post';

@NgModule({
  declarations: [
    ModalPost,
  ],
  imports: [
    IonicPageModule.forChild(ModalPost),
  ],
  exports: [
    ModalPost
  ]
})
export class ModalPostModule {}
