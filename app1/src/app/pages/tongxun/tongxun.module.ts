import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TongxunRoutingModule } from './tongxun-routing.module';
import { TongxunComponent } from './tongxun.component';

@NgModule({
  declarations: [TongxunComponent],
  imports: [
    CommonModule,
    TongxunRoutingModule
  ]
})
export class TongxunModule { }
