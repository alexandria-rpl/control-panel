import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDimensionalPrintingColorsComponent } from './three-dimensional-printing-colors.component';

describe('ThreeDimensionalPrintingColorsComponent', () => {
  let component: ThreeDimensionalPrintingColorsComponent;
  let fixture: ComponentFixture<ThreeDimensionalPrintingColorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDimensionalPrintingColorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDimensionalPrintingColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
