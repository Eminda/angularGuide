import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form5',
  templateUrl: './form5.component.html',
  styleUrls: ['./form5.component.css']
})
export class Form5Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(value: any, valid: boolean) {
    console.log(valid);
    console.log(value);
  }
}
