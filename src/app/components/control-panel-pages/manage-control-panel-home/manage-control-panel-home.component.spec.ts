import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageControlPanelHomeComponent } from './manage-control-panel-home.component';

describe('ManageControlPanelHomeComponent', () => {
  let component: ManageControlPanelHomeComponent;
  let fixture: ComponentFixture<ManageControlPanelHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageControlPanelHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageControlPanelHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
