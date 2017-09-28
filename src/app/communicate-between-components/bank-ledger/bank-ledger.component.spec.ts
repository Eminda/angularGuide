import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankLedgerComponent } from './bank-ledger.component';

describe('BankLedgerComponent', () => {
  let component: BankLedgerComponent;
  let fixture: ComponentFixture<BankLedgerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankLedgerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankLedgerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
