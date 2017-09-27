import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ValidateBirthDay} from "../form7/form7.component";

@Component({
  selector: 'app-form9',
  templateUrl: './form9.component.html',
  styleUrls: ['./form9.component.css']
})
export class Form9Component implements OnInit {
  myGroup: FormGroup;


  constructor(private fb: FormBuilder) {

  }

  ngOnInit() {
    this.myGroup = this.fb.group({
      userName: ['Eminda', [Validators.required, Validators.minLength(3)]],
      telephone: ['', [Validators.pattern('[0-9]*')]],
      birthYear: ['', [ValidateBirthDay]],
      address: this.fb.group({
        street: ['Street 1'],
        city: ['']
      })
    });
  }

  submitForm(value: any, valid: boolean) {
    console.log(valid);
    console.log(value);
  }

}
