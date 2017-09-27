import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {AngularDirectivesComponent} from './angular-directives/angular-directives.component';
import {Switch1Component} from './angular-directives/switch1/switch1.component';
import {Switch2Component} from './angular-directives/switch2/switch2.component';
import {Switch3Component} from './angular-directives/switch3/switch3.component';
import {RouterModule, Routes} from "@angular/router";

const appRoutes: Routes = [
  {path: 'directive', component: AngularDirectivesComponent},
  {path: 'dataBinding', component: DataBindingComponent},
  {path: '**', component: AppComponent}
];


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
    BrowserModule, FormsModule, RouterModule.forRoot(
      appRoutes,
      {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
