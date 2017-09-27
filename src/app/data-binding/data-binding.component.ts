import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  heading = 'Hi,There';
  paragraphClasses = 'font-color font-size';
  value = 'I am the value';
  valueWithEvent = 'I am value with event';
  ngModelValue = 'I am the ngModel Value';

  ngModelValueWithEvent = 'I am the ngModel Value';
  constructor() { }

  ngOnInit() {
  }

}
