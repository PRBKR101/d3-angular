import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockVsTrendComponent } from './stock-vs-trend.component';

describe('StockVsTrendComponent', () => {
  let component: StockVsTrendComponent;
  let fixture: ComponentFixture<StockVsTrendComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StockVsTrendComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StockVsTrendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
