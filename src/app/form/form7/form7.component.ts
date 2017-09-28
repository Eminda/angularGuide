import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-form7',
  templateUrl: './form7.component.html',
  styleUrls: ['./form7.component.css']
})
export class Form7Component implements OnInit {
  myGroup: FormGroup = new FormGroup({
    userName: new FormControl('Eminda', [Validators.required, Validators.minLength(3)]),
    telephone: new FormControl('', [Validators.pattern('[0-9]*')]),
    birthYear: new FormControl('', [ValidateBirthDay])
  });

  constructor() {
  }

  ngOnInit() {
  }

  submitForm(myGroup: any) {
    console.log('Retrieved values');
    console.log(myGroup);
    console.log('In Form values');
    console.log(this.myGroup);
    console.log(this.myGroup.valid);
  }

}

export function ValidateBirthDay(birthDay: AbstractControl) {
  const numValue = Number(birthDay.value);
  const currentYear = new Date().getFullYear();
  const minYear = currentYear - 50;
  const maxYear = currentYear - 18;
  const isValid = !isNaN(numValue) && numValue >= minYear && numValue <= maxYear;
  const message = {
    'years': {
      'message': 'The year must be a valid number between ' + minYear + ' and ' + maxYear
    }
  };
  return isValid ? null : message;
}
