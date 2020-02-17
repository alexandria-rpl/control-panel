import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageGroupMenuItemsComponent } from './manage-group-menu-items.component';

describe('ManageGroupPrivilegesComponent', () => {
  let component: ManageGroupMenuItemsComponent;
  let fixture: ComponentFixture<ManageGroupMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageGroupMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageGroupMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
