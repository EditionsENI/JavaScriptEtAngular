import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C09Component } from './c09.component';

describe('C09Component', () => {
  let component: C09Component;
  let fixture: ComponentFixture<C09Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C09Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C09Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
