import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TongxunComponent } from './tongxun.component';
const routes: Routes = [{
  path:'',
  component:TongxunComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TongxunRoutingModule { }
