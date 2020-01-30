import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDemensionalPrintingManagementComponent } from './three-demensional-printing-management.component';

describe('ThreeDemensionalPrintingManagementComponent', () => {
  let component: ThreeDemensionalPrintingManagementComponent;
  let fixture: ComponentFixture<ThreeDemensionalPrintingManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDemensionalPrintingManagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDemensionalPrintingManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
