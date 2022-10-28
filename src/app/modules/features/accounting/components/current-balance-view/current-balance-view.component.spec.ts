import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentBalanceViewComponent } from './current-balance-view.component';

describe('CurrentBalanceViewComponent', () => {
  let component: CurrentBalanceViewComponent;
  let fixture: ComponentFixture<CurrentBalanceViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrentBalanceViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentBalanceViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
