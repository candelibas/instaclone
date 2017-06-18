import { Component } from '@angular/core';
import { App, NavController, NavParams } from 'ionic-angular';
import { MessageDetail } from '../message-detail/message-detail';
import { NewMessage } from '../new-message/new-message';

@Component({
  selector: 'page-messages',
  templateUrl: 'messages.html',
})
export class Messages {

  // You can get this data from your API. This is a dumb data for being an example.
  public messages = [
    {
      id: 1,
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      sender: 'candelibas',
      last_message: 'How you doin?',
      time: '6h'
    },
    {
      id: 2,
      profile_img: 'https://pbs.twimg.com/profile_images/726955832785571840/8OxhcDxl_400x400.jpg',
      sender: 'maxlynch',
      last_message: 'LOL. Ionic in 2017',
      time: '11h'
    },
    {
      id: 3,
      profile_img: 'http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg',
      sender: 'ashleyosama',
      last_message: 'Wanna hang out?',
      time: '1d'
    },
    {
      id: 4,
      profile_img: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa_400x400.jpeg',
      sender: 'adam_bradley',
      last_message: 'Typescript <3 me',
      time: '3d'
    },
    {
      id: 5,
      profile_img: 'https://avatars1.githubusercontent.com/u/1024025?v=3&s=120',
      sender: 'linus_torvalds',
      last_message: 'I am installing Ubuntu right now.',
      time: '6d'
    }
    
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, private app: App) {
  }

  goNewMessage() {
    this.app.getRootNav().push(NewMessage);
  }

  goMessageDetail(sender:string, profile_img:string, last_message:string) {
    this.app.getRootNav().push(MessageDetail, { sender: sender, profile_img: profile_img, last_message: last_message});
  }

}
