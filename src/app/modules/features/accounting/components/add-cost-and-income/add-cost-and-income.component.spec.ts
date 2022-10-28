import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCostAndIncomeComponent } from './add-cost-and-income.component';

describe('AddCostAndIncomeComponent', () => {
  let component: AddCostAndIncomeComponent;
  let fixture: ComponentFixture<AddCostAndIncomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCostAndIncomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCostAndIncomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
