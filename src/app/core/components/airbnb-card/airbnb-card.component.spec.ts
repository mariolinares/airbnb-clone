import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirbnbCardComponent } from './airbnb-card.component';

describe('AirbnbCardComponent', () => {
  let component: AirbnbCardComponent;
  let fixture: ComponentFixture<AirbnbCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AirbnbCardComponent]
    });
    fixture = TestBed.createComponent(AirbnbCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
