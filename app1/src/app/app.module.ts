import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QqDemoComponent } from './components/qq-demo/qq-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    QqDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
