import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinearPlotGraphComponent } from './linear-plot-graph.component';

describe('LinearPlotGraphComponent', () => {
  let component: LinearPlotGraphComponent;
  let fixture: ComponentFixture<LinearPlotGraphComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinearPlotGraphComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinearPlotGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
