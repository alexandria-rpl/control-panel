import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGroupPrivilegesComponent } from './manage-group-privileges.component';

describe('ManageGroupPrivilegesComponent', () => {
  let component: ManageGroupPrivilegesComponent;
  let fixture: ComponentFixture<ManageGroupPrivilegesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGroupPrivilegesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGroupPrivilegesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
