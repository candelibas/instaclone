import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-new-message',
  templateUrl: 'new-message.html',
})
export class NewMessage {

  public user_checked:boolean = false;
  public input_visible:boolean = false;

  public friends = [
    {
      id: 1,
      profile_img: 'https://avatars1.githubusercontent.com/u/918975?v=3&s=120',
      username: 'candelibas'
    },
    {
      id: 2,
      profile_img: 'https://pbs.twimg.com/profile_images/726955832785571840/8OxhcDxl_400x400.jpg',
      username: 'maxlynch'
    },
    {
      id: 3,
      profile_img: 'http://ionicframework.com/dist/preview-app/www/assets/img/sarah-avatar.png.jpeg',
      username: 'ashleyosama'
    },
    {
      id: 4,
      profile_img: 'https://pbs.twimg.com/profile_images/479090794058379264/84TKj_qa_400x400.jpeg',
      username: 'adam_bradley'
    },
    {
      id: 5,
      profile_img: 'https://avatars1.githubusercontent.com/u/1024025?v=3&s=120',
      username: 'linus_torvalds'
    }
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  checkBox(username:string) {
    console.log('Username: ' + username);
    this.input_visible = true;
  }

}
