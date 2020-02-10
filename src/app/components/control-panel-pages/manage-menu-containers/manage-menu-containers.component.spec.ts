import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageMenuContainersComponent } from './manage-menu-containers.component';

describe('ManageMenuContainersComponent', () => {
  let component: ManageMenuContainersComponent;
  let fixture: ComponentFixture<ManageMenuContainersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageMenuContainersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageMenuContainersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
