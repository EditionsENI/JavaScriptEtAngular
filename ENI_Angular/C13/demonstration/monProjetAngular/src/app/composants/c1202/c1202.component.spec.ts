import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C1202Component } from './c1202.component';

describe('C1202Component', () => {
  let component: C1202Component;
  let fixture: ComponentFixture<C1202Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C1202Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C1202Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
