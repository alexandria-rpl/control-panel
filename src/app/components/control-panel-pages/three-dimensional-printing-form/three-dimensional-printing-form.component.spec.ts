import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDimensionalPrintingFormComponent } from './three-dimensional-printing-form.component';

describe('ThreeDimensionalPrintingFormComponent', () => {
  let component: ThreeDimensionalPrintingFormComponent;
  let fixture: ComponentFixture<ThreeDimensionalPrintingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDimensionalPrintingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDimensionalPrintingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
