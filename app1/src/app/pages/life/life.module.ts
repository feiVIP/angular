import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // 双向绑定
import { LifeRoutingModule } from './life-routing.module';
import { LifeComponent } from './life.component';

@NgModule({
  declarations: [LifeComponent],
  imports: [
    CommonModule,
    LifeRoutingModule,
    FormsModule
  ]
})
export class LifeModule { }
