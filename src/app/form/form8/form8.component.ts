import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ValidateBirthDay} from "../form7/form7.component";

@Component({
  selector: 'app-form8',
  templateUrl: './form8.component.html',
  styleUrls: ['./form8.component.css']
})
export class Form8Component implements OnInit {
  myGroup: FormGroup = new FormGroup({
    userName: new FormControl('Eminda', [Validators.required, Validators.minLength(3)]),
    telephone: new FormControl('', [Validators.pattern('[0-9]*')]),
    birthYear: new FormControl('', [ValidateBirthDay]),
    address: new FormGroup({
      street: new FormControl('Street 1'),
      city: new FormControl('')
    })
  });


  constructor() {
  }

  ngOnInit() {
  }

  submitForm(value: any, valid: boolean) {
    console.log(valid);
    console.log(value);
  }

}
