import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C11PereComponent } from './c11-pere.component';

describe('C11PereComponent', () => {
  let component: C11PereComponent;
  let fixture: ComponentFixture<C11PereComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C11PereComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C11PereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
