import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch1Component } from './switch1.component';

describe('Switch1Component', () => {
  let component: Switch1Component;
  let fixture: ComponentFixture<Switch1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Switch1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Switch1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
