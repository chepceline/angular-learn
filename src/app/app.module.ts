import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NealComponentComponent } from './neal-component/neal-component.component';
import { TheParentComponentComponent } from './Basics/Component-Data-Binding/child-parent/the-parent-component/the-parent-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    NealComponentComponent,
    TheParentComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
