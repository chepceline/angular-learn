import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { NealComponentComponent } from './neal-component/neal-component.component';
import { TheParentComponentComponent } from './Basics/Component-Data-Binding/child-parent/the-parent-component/the-parent-component.component';
import { ChildComponentComponent } from './Basics/Component-Data-Binding/parent-child/child-component/child-component.component';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    NealComponentComponent,
    TheParentComponentComponent,
    ChildComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
