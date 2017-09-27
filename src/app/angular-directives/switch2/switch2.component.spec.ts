import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Switch2Component } from './switch2.component';

describe('Switch2Component', () => {
  let component: Switch2Component;
  let fixture: ComponentFixture<Switch2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Switch2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Switch2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
