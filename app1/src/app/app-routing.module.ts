import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: 'form',
    loadChildren: './pages/form/form.module#FormModule'
  },
  {
    path: 'ajax',
    loadChildren: './pages/ajax/ajax.module#AjaxModule'
  },
  {
    path: 'life',
    loadChildren: './pages/life/life.module#LifeModule'
  },
  {
    path: 'router',
    loadChildren: './pages/router/router.module#RouterModule'
  },
  {
    path: 'todo-list',
    loadChildren: './pages/todo-list/todo-list.module#TodoListModule'
  },
  {
    path: 'tongxun',
    loadChildren: './pages/tongxun/tongxun.module#TongxunModule'
  },
  {
    path: 'base',
    loadChildren: './pages/base/base.module#BaseModule'
  },
  {
    path: '**', redirectTo: 'form'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
