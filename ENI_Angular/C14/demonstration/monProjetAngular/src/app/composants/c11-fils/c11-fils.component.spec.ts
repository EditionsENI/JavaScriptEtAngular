import { ComponentFixture, TestBed } from '@angular/core/testing';

import { C11FilsComponent } from './c11-fils.component';

describe('C11FilsComponent', () => {
  let component: C11FilsComponent;
  let fixture: ComponentFixture<C11FilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ C11FilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(C11FilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
