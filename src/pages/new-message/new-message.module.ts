import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewMessage } from './new-message';

@NgModule({
  declarations: [
    NewMessage,
  ],
  imports: [
    IonicPageModule.forChild(NewMessage),
  ],
  exports: [
    NewMessage
  ]
})
export class NewMessageModule {}
