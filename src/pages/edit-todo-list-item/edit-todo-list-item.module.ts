import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditTodoListItemPage } from './edit-todo-list-item';

@NgModule({
  declarations: [
    EditTodoListItemPage,
  ],
  imports: [
    IonicPageModule.forChild(EditTodoListItemPage),
  ],
})
export class EditTodoListItemPageModule {}
