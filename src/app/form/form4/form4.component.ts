import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-form4',
  templateUrl: './form4.component.html',
  styleUrls: ['./form4.component.css']
})
export class Form4Component implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

  submitForm(value: any, valid: boolean) {
    console.log(valid);
    console.log(value);
  }

}
