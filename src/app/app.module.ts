import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FirstComponent } from './app.firstcomponent';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [
    FirstComponent]
})
export class AppModule { }
