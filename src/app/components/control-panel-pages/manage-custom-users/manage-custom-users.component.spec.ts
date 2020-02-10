import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomUsersComponent } from './manage-custom-users.component';

describe('ManageCustomUsersComponent', () => {
  let component: ManageCustomUsersComponent;
  let fixture: ComponentFixture<ManageCustomUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCustomUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCustomUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
