import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormMetrialComponent } from './form-metrial.component';

describe('FormMetrialComponent', () => {
  let component: FormMetrialComponent;
  let fixture: ComponentFixture<FormMetrialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormMetrialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormMetrialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
