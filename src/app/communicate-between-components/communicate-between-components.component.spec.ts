import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommunicateBetweenComponentsComponent } from './communicate-between-components.component';

describe('CommunicateBetweenComponentsComponent', () => {
  let component: CommunicateBetweenComponentsComponent;
  let fixture: ComponentFixture<CommunicateBetweenComponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommunicateBetweenComponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommunicateBetweenComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
