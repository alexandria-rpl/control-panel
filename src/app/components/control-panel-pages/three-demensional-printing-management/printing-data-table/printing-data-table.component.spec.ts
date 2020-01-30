import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrintingDataTableComponent } from './printing-data-table.component';

describe('PrintingDataTableComponent', () => {
  let component: PrintingDataTableComponent;
  let fixture: ComponentFixture<PrintingDataTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrintingDataTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrintingDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
