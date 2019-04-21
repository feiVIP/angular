import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterRoutingModule } from './router-routing.module';
import { RouterComponent } from './router.component';

@NgModule({
  declarations: [RouterComponent],
  imports: [
    CommonModule,
    RouterRoutingModule
  ]
})
export class RouterModule { }
