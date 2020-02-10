import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageCustomUserMenuItemsComponent } from './manage-custom-user-menu-items.component';

describe('ManageCustomUserMenuItemsComponent', () => {
  let component: ManageCustomUserMenuItemsComponent;
  let fixture: ComponentFixture<ManageCustomUserMenuItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageCustomUserMenuItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageCustomUserMenuItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
