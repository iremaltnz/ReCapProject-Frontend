import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterCarComponent } from './filter-car.component';

describe('FilterCarComponent', () => {
  let component: FilterCarComponent;
  let fixture: ComponentFixture<FilterCarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterCarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterCarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
