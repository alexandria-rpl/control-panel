import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomUserPrivilegesComponent } from './manage-custom-user-privileges.component';

describe('ManageCustomUserPrivilegesComponent', () => {
  let component: ManageCustomUserPrivilegesComponent;
  let fixture: ComponentFixture<ManageCustomUserPrivilegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCustomUserPrivilegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCustomUserPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
