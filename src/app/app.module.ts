import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ReactiveDemoComponent } from './reactive-demo/reactive-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    ReactiveDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
