import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuGroupDetailsComponent } from './menu-group-details.component';

describe('MenuGroupDetailsComponent', () => {
  let component: MenuGroupDetailsComponent;
  let fixture: ComponentFixture<MenuGroupDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuGroupDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuGroupDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
