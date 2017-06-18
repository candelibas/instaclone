import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TaggedProfile } from './tagged-profile';

@NgModule({
  declarations: [
    TaggedProfile,
  ],
  imports: [
    IonicPageModule.forChild(TaggedProfile),
  ],
  exports: [
    TaggedProfile
  ]
})
export class TaggedProfileModule {}
