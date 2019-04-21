import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 双向绑定
import { FormRoutingModule } from './form-routing.module';
import { FormComponent } from './form.component';

@NgModule({
  declarations: [ //声明
    FormComponent
  ],
  imports: [
    CommonModule,
    FormRoutingModule,
    FormsModule
  ]
})
export class FormModule { }
