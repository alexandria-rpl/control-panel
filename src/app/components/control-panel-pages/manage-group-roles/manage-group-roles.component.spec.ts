import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGroupRolesComponent } from './manage-group-roles.component';

describe('ManageGroupRolesComponent', () => {
  let component: ManageGroupRolesComponent;
  let fixture: ComponentFixture<ManageGroupRolesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGroupRolesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGroupRolesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
