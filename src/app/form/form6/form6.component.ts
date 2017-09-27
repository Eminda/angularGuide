import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-form6',
  templateUrl: './form6.component.html',
  styleUrls: ['./form6.component.css']
})
export class Form6Component implements OnInit {
  myGroup: FormGroup= new FormGroup({
    userName: new FormControl('Eminda'),
    telephone: new FormControl(),
    birthYear: new FormControl()
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
