import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDimensionalPrintingManagementComponent } from './three-dimensional-printing-management.component';

describe('ThreeDemensionalPrintingManagementComponent', () => {
  let component: ThreeDimensionalPrintingManagementComponent;
  let fixture: ComponentFixture<ThreeDimensionalPrintingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDimensionalPrintingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDimensionalPrintingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
