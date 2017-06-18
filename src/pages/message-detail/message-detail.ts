import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-message-detail',
  templateUrl: 'message-detail.html',
})
export class MessageDetail {

  public sender:string;
  public profile_img:string;
  public last_message:string;
  public send_like_icon:boolean = false;
  public likeBtnVisible:boolean = false;

  public messages = []; // You can get all the chat details from your API

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.sender = this.navParams.get('sender');
    this.profile_img = this.navParams.get('profile_img');
    this.last_message = this.navParams.get('last_message');
  }

  sendLike() {
    if(this.send_like_icon === false) {
      this.send_like_icon = true;
    }
      // Allow heart effect
      this.likeBtnVisible = !this.likeBtnVisible;
  }

}
