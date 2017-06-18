import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessageDetail } from './message-detail';

@NgModule({
  declarations: [
    MessageDetail,
  ],
  imports: [
    IonicPageModule.forChild(MessageDetail),
  ],
  exports: [
    MessageDetail
  ]
})
export class MessageDetailModule {}
