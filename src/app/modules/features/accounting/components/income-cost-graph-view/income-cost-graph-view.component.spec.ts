import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomeCostGraphViewComponent } from './income-cost-graph-view.component';

describe('IncomeCostGraphViewComponent', () => {
  let component: IncomeCostGraphViewComponent;
  let fixture: ComponentFixture<IncomeCostGraphViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncomeCostGraphViewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomeCostGraphViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
