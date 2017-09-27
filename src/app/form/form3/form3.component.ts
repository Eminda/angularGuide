import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  submitForm(value: any, valid: boolean) {
    console.log(valid);
    console.log(value);
  }
}
