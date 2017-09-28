import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-communicate-between-components',
  templateUrl: './communicate-between-components.component.html',
  styleUrls: ['./communicate-between-components.component.css']
})
export class CommunicateBetweenComponentsComponent implements OnInit {
  value = 0;
  latestDeposit: Number;
  sms;

  constructor() {
  }

  ngOnInit() {
  }

  deposit(value: any) {
    this.latestDeposit = value;
  }

  getDeposit() {
    return this.latestDeposit;
  }

  showSMS(event) {
    this.sms = event;
  }

}
