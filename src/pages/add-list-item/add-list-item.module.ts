import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddListItemPage } from './add-list-item';

@NgModule({
  declarations: [
    AddListItemPage,
  ],
  imports: [
    IonicPageModule.forChild(AddListItemPage),
  ],
})
export class AddListItemPageModule {}
