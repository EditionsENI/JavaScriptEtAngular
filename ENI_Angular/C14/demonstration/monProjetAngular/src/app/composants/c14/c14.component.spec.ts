import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C14Component } from './c14.component';

describe('C14Component', () => {
  let component: C14Component;
  let fixture: ComponentFixture<C14Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C14Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C14Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
