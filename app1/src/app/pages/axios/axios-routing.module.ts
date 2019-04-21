import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AxiosComponent } from './axios.component';
const routes: Routes = [{
  path:'',
  component:AxiosComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AxiosRoutingModule { }
