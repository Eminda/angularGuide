import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch3Component } from './switch3.component';

describe('Switch3Component', () => {
  let component: Switch3Component;
  let fixture: ComponentFixture<Switch3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Switch3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Switch3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
