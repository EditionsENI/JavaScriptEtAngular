import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1201Component } from './c1201.component';

describe('C1201Component', () => {
  let component: C1201Component;
  let fixture: ComponentFixture<C1201Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1201Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
