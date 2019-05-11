import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildOneComponent } from './parent/child-one/child-one.component';
import { Parent2Component } from './parent2/parent2.component';
import { Child2Component } from './parent2/child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildOneComponent,
    Parent2Component,
    Child2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
