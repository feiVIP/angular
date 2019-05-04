import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TongxunRoutingModule } from './tongxun-routing.module';
import { TongxunComponent } from './tongxun.component';
import {SonComponent} from "./son/son.component";
import {Son1Component} from "./son1/son1.component";

@NgModule({
  declarations: [TongxunComponent,SonComponent,Son1Component],
  imports: [
    CommonModule,
    TongxunRoutingModule
  ]
})
export class TongxunModule { }
