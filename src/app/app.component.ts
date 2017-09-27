import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading = 'Hi,There';
  paragraphClasses = 'font-color font-size';
  value = 'I am the value';
  valueWithEvent = 'I am value with event';
  ngModelValue = 'I am the ngModel Value';

  ngModelValueWithEvent = 'I am the ngModel Value';
}
