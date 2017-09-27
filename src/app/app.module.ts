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
import {FormComponent} from './form/form.component';
import {Form1Component} from './form/form1/form1.component';
import { Form2Component } from './form/form2/form2.component';
import { Form3Component } from './form/form3/form3.component';
import { Form4Component } from './form/form4/form4.component';
import { BirthYearDirective } from './form/form4/birth-year.directive';
import { Form5Component } from './form/form5/form5.component';

const appRoutes: Routes = [
  {path: 'directive', component: AngularDirectivesComponent},
  {path: 'dataBinding', component: DataBindingComponent},
  {
    path: 'form', component: FormComponent, children: [
    {path: 'form1', component: Form1Component},
    {path: 'form2', component: Form2Component},
    {path: 'form3', component: Form3Component},
    {path: 'form4', component: Form4Component},
    {path: 'form5', component: Form5Component}
  ]
  }
];


@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    AngularDirectivesComponent,
    Switch1Component,
    Switch2Component,
    Switch3Component,
    FormComponent,
    Form1Component,
    Form2Component,
    Form3Component,
    Form4Component,
    BirthYearDirective,
    Form5Component
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(
      appRoutes
      // ,
      // {enableTracing: true} // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
