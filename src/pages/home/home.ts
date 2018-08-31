import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/map';
import { Item } from './../../models/item/item.model';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  todoList$: Observable<Item[]>;

  constructor(public navCtrl: NavController, private todo: TodoListService) {

    this.todoList$ = this.todo.getTodoList().snapshotChanges().map(
      changes => {
        return changes.map(c => ({
          key: c.payload.key, ...c.payload.val()
        }));
      });
  }

}
