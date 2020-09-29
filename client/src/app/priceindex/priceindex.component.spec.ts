import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PriceindexComponent } from './priceindex.component';

describe('PriceindexComponent', () => {
  let component: PriceindexComponent;
  let fixture: ComponentFixture<PriceindexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PriceindexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PriceindexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
