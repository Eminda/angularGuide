import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-bank-ledger',
  templateUrl: './bank-ledger.component.html',
  styleUrls: ['./bank-ledger.component.css']
})
export class BankLedgerComponent implements OnInit, OnChanges {

  @Input()
  deposit;

  @Output()
  private sms = new EventEmitter<String>();

  ledger = [];


  constructor() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.deposit && !changes.deposit.isFirstChange()) {
      this.ledger.push('Deposit : ' + this.deposit);
      this.sms.emit('Deposit Happened : ' + this.deposit);
    }
  }

  ngOnInit() {
  }

  fineCustomer(value: any) {
    this.ledger.push('Fine : ' + value);
    this.sms.emit('Bank Charges applied for your account : ' + value);
  }


}
