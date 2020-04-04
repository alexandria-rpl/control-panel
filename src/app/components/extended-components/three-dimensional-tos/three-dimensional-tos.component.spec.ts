import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeDimensionalTosComponent } from './three-dimensional-tos.component';

describe('ThreeDimensionalTosComponent', () => {
  let component: ThreeDimensionalTosComponent;
  let fixture: ComponentFixture<ThreeDimensionalTosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreeDimensionalTosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeDimensionalTosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
