import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {Item} from './../../models/item/item.model';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { ToastService } from '../../services/toast/toast.service';
/**
 * Generated class for the EditTodoListItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-edit-todo-list-item',
  templateUrl: 'edit-todo-list-item.html',
})
export class EditTodoListItemPage {
  item: Item;

  constructor(public navCtrl: NavController,
               public navParams: NavParams,
               private todo: TodoListService,
               private toast: ToastService
              ) {
  }

  ionViewWillLoad() {
    this.item = this.navParams.get('item');
  }
  saveItem(item: Item){
    this.todo.editItem(item).then(() => {
      this.toast.show(`${item.name} saved!`);
      this.navCtrl.setRoot('HomePage');
    });
  }
  removeItem(item: Item){
    this.todo.removeItem(item)
    .then(() =>{
      this.toast.show(`${item.name} deleted!`)
      this.navCtrl.setRoot('HomePage');
    })
  }
}
