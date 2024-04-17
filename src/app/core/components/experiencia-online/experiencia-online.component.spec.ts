import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienciaOnlineComponent } from './experiencia-online.component';

describe('ExperienciaOnlineComponent', () => {
  let component: ExperienciaOnlineComponent;
  let fixture: ComponentFixture<ExperienciaOnlineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienciaOnlineComponent]
    });
    fixture = TestBed.createComponent(ExperienciaOnlineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
