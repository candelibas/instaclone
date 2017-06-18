import { Component } from '@angular/core';
import { ViewController, ToastController } from 'ionic-angular';

@Component({
  template: `
    <ion-list>
      <button ion-item (click)="close()">Report</button>
      <button ion-item (click)="close()">Copy Share URL</button>
      <button ion-item (click)="close()">Turn on Post Notifications</button>
      <button ion-item (click)="close()">Share on Messenger</button>
    </ion-list>
  `
})
export class PostPopover {
  constructor(public viewCtrl: ViewController, public toastCtrl: ToastController) {}

  close() {
    this.presentToast();
    this.viewCtrl.dismiss();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Notification',
      duration: 2000
    });
    toast.present();
  }
}