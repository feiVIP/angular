import {Component, OnInit} from '@angular/core';
import {TodoListService} from "./todo-list.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public keyword: string;
  public todolist: any[] = [];


  constructor(public storage: TodoListService) {
  }

  ngOnInit() {
    const itemlist: any = this.storage.get('itemlist');

    if (itemlist) {
      this.todolist = itemlist;
    }

  }


  doAdd(e) {
    if (e.keyCode == 13) {
      if (!this.todolistHasKeyword(this.todolist, this.keyword)) {
        this.todolist.push({
          title: this.keyword,
          status: 0                   //0表示代办事项  1表示已完成事项
        });
        this.storage.set('itemlist', this.todolist);
        this.keyword = '';
      } else {
        alert('数据已经存在');
        this.keyword = '';
      }
    }
  }

  addItem() {
    if (!this.todolistHasKeyword(this.todolist, this.keyword)) {
      this.todolist.push({
        title: this.keyword,
        status: 0                   //0表示代办事项  1表示已完成事项
      });
      this.storage.set('itemlist', this.todolist);
      this.keyword = '';
    } else {
      alert('数据已经存在');
      this.keyword = '';
    }
  }

  deleteData(key) {
    this.todolist.splice(key, 1);
    this.storage.set('itemlist', this.todolist);
  }

  cheboxBtn() {
    console.log(1)
    this.storage.set('itemlist', this.todolist);
  }

  //如果数组里面有keyword返回true  否则返回false
  todolistHasKeyword(todolist: any, keyword: any) {

    if (!keyword) return false;
    for (var i = 0; i < todolist.length; i++) {
      if (todolist[i].title == keyword) {
        return true;
      }
    }
    return false;
  }

}
