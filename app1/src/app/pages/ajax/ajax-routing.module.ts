import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjaxComponent } from './ajax.component';
const routes: Routes = [{
  path: '',
  component: AjaxComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AjaxRoutingModule { }
