import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AxiosRoutingModule } from './axios-routing.module';
import { AxiosComponent } from './axios.component';

@NgModule({
  declarations: [AxiosComponent],
  imports: [
    CommonModule,
    AxiosRoutingModule
  ]
})
export class AxiosModule { }
