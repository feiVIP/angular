import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms'; // 双向绑定
import {TodoListRoutingModule} from './todo-list-routing.module';
import {TodoListComponent} from "./todo-list.component";
import {TodoListService} from "./todo-list.service";

@NgModule({


  declarations: [TodoListComponent],
  imports: [
    CommonModule,
    TodoListRoutingModule,
    FormsModule
  ],
  providers: [TodoListService]

})
export class TodoListModule {
}
