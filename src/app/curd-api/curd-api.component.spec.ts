import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurdApiComponent } from './curd-api.component';

describe('CurdApiComponent', () => {
  let component: CurdApiComponent;
  let fixture: ComponentFixture<CurdApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurdApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurdApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
