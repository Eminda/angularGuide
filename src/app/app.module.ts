import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {DataBindingComponent} from './data-binding/data-binding.component';
import {AngularDirectivesComponent} from './angular-directives/angular-directives.component';
import {Switch1Component} from './angular-directives/switch1/switch1.component';
import {Switch2Component} from './angular-directives/switch2/switch2.component';
import {Switch3Component} from './angular-directives/switch3/switch3.component';
import {RouterModule, Routes} from "@angular/router";
import {FormComponent} from './form/form.component';
import {Form1Component} from './form/form1/form1.component';
import {Form2Component} from './form/form2/form2.component';
import {Form3Component} from './form/form3/form3.component';
import {Form4Component} from './form/form4/form4.component';
import {BirthYearDirective} from './form/form4/birth-year.directive';
import {Form5Component} from './form/form5/form5.component';
import {Form6Component} from './form/form6/form6.component';
import {Form7Component} from './form/form7/form7.component';
import {Form8Component} from './form/form8/form8.component';
import {Form9Component} from './form/form9/form9.component';
import {AngularServicesComponent} from './angular-services/angular-services.component';
import {Demo1Component} from './angular-services/demo1/demo1.component';
import {Demo2Component} from './angular-services/demo2/demo2.component';
import {ValueStoreService} from "./angular-services/value-store.service";
import {HttpComponent} from './http/http.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {PipeComponent} from './pipe/pipe.component';
import {FilterPipePipe} from './pipe/filter-pipe.pipe';
import { CommunicateBetweenComponentsComponent } from './communicate-between-components/communicate-between-components.component';
import { BankLedgerComponent } from './communicate-between-components/bank-ledger/bank-ledger.component';

const appRoutes: Routes = [
  {path: 'directive', component: AngularDirectivesComponent},
  {path: 'dataBinding', component: DataBindingComponent},
  {
    path: 'form', component: FormComponent, children: [
    {path: 'form1', component: Form1Component},
    {path: 'form2', component: Form2Component},
    {path: 'form3', component: Form3Component},
    {path: 'form4', component: Form4Component},
    {path: 'form5', component: Form5Component},
    {path: 'form6', component: Form6Component},
    {path: 'form7', component: Form7Component},
    {path: 'form8', component: Form8Component},
    {path: 'form9', component: Form9Component}
  ]
  },
  {
    path: 'angularService', component: AngularServicesComponent, children: [
    {path: 'demo1', component: Demo1Component},
    {path: 'demo2', component: Demo2Component}
  ]
  },
  {path: 'http', component: HttpComponent},
  {path: 'pipe', component: PipeComponent},
  {path: 'event', component: CommunicateBetweenComponentsComponent}
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
    Form5Component,
    Form6Component,
    Form7Component,
    Form8Component,
    Form9Component,
    AngularServicesComponent,
    Demo1Component,
    Demo2Component,
    HttpComponent,
    PipeComponent,
    FilterPipePipe,
    CommunicateBetweenComponentsComponent,
    BankLedgerComponent
  ],
  imports: [
    BrowserModule, FormsModule, RouterModule.forRoot(
      appRoutes
      // ,
      // {enableTracing: true} // <-- debugging purposes only
    ), ReactiveFormsModule, HttpClientModule
  ],
  providers: [ValueStoreService, HttpClient, FilterPipePipe],
  bootstrap: [AppComponent]
})
export class AppModule {
}
