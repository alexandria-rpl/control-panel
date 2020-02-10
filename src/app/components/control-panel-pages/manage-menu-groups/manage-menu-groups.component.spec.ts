import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMenuGroupsComponent } from './manage-menu-groups.component';

describe('ManageMenuGroupsComponent', () => {
  let component: ManageMenuGroupsComponent;
  let fixture: ComponentFixture<ManageMenuGroupsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMenuGroupsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMenuGroupsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
