import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C10Component } from './c10.component';

describe('C10Component', () => {
  let component: C10Component;
  let fixture: ComponentFixture<C10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
