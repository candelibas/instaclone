import { Component } from '@angular/core';

import { Home } from '../home/home';
import { Search } from '../search/search';
import { Notifications } from '../notifications/notifications';
import { Profile } from '../profile/profile';

import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = Home;
  tab2Root = Search;
  // tab3Root = null;
  tab4Root = Notifications;
  tab5Root = Profile;

  constructor(private camera: Camera) {

  }

  openCamera() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    }

    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      let base64Image = 'data:image/jpeg;base64,' + imageData;
    }, (err) => {
      // Handle error
    });
  }
}
