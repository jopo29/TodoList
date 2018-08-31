import {Injectable} from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import {Item} from './../../models/item/item.model';
@Injectable()
export class TodoListService {
    private todoListRef = this.db.list<Item>('todo-list');
    constructor(private db: AngularFireDatabase) {

    }
    getTodoList(){
        return this.todoListRef;
    }
    addItem(item: Item){
        return this.todoListRef.push(item);
    }
    editItem(item: Item){
        return this.todoListRef.update(item.key, item);
    }
    removeItem(item: Item){
        return this.todoListRef.remove(item.key);
    }
}