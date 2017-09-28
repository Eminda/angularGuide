import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Form7Component } from './form7.component';

describe('Form7Component', () => {
  let component: Form7Component;
  let fixture: ComponentFixture<Form7Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Form7Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Form7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
