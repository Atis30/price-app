import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaypriceComponent } from './displayprice.component';

describe('DisplaypriceComponent', () => {
  let component: DisplaypriceComponent;
  let fixture: ComponentFixture<DisplaypriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaypriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaypriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
