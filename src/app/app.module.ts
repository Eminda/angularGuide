import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { AngularDirectivesComponent } from './angular-directives/angular-directives.component';
import { Switch1Component } from './angular-directives/switch1/switch1.component';
import { Switch2Component } from './angular-directives/switch2/switch2.component';
import { Switch3Component } from './angular-directives/switch3/switch3.component';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    AngularDirectivesComponent,
    Switch1Component,
    Switch2Component,
    Switch3Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
