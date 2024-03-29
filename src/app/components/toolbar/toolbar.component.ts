import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import { faUserCircle,
         faBars, } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';
import { User } from '../../interfaces/control-panel-access/user.interface';
import { UserLogin } from '../../interfaces/authentication/user-login.interface';
import { ControlPanelAccessService } from '../../services/control-panel-access-service/control-panel-access.service';
import {MenuContainer} from '../../interfaces/control-panel-access/menu-container.interface';
import {MenuItem} from '../../interfaces/control-panel-access/menu-item.interface';
import {Menu} from '../../interfaces/control-panel-access/menu.interface';
import {ThreeDimensionalPrintingColorsComponent} from '../control-panel-pages/three-dimensional-printing-colors/three-dimensional-printing-colors.component';
import {ThreeDimensionalPrintingManagementComponent} from '../control-panel-pages/three-dimensional-printing-management/three-dimensional-printing-management.component';
import {ThreeDimensionalPrintingForm} from '../../interfaces/library-forms/three-dimensional-printing-form';
@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  faUserCircle = faUserCircle;
  faBars = faBars;
  profile: User;

  /* Creating var now, it will hold the
  user information from the authentication service */
  userLoggedIn: UserLogin;
  menuContainers: MenuContainer[];
  private menuItems: MenuItem[];
  private menus: Menu[];

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private router: Router,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    /* hard coding user for now to bypass authentication */
    /*this.profile = {
           _id: '5e41794c970c6027dcc705dc',
      userName: 'billybissic'
    };*/

    this.getAllMenuContainers();
    this.getAllMenus();
    this.getAllMenuItems();
  }


  dyanmicRouter(menuItemId: string) {
    let i;
    if (this.menuItems !== null) {
      for (i in this.menuItems) {
        if (i._id === menuItemId) {
          this.router.navigateByUrl(i.url);
        }
      }
    }
  }

  /* Hard coding pages that are required for system setup */
  /* Note: These pages can be added as menu items, but the router links cannot be changed! */
  routeToHome() {
    this.router.navigateByUrl('/');
  }

  routeToUserGroupMenuItemManagement() {
    this.router.navigateByUrl('');
  }

  routeToEventCalendar() {
    this.router.navigateByUrl('control-panel/calendar/event-calendar');
  }

  routeToEventScheduler() {
    this.router.navigateByUrl('control-panel/calendar/event-scheduler');
  }

  routeToEventStaticData() {
    this.router.navigateByUrl('control-panel/calendar/event-static-data');
  }

  routeToUserManagement() {
    this.router.navigateByUrl( 'control-panel/control-panel-access/user-management');
  }

  routeToCustomUserPrivilegeManagement() {
    this.router.navigateByUrl('control-panel/control-panel-access/custom-user-privilege-management');
  }

  routeToMenuGroupManagement() {
    this.router.navigateByUrl('control-panel/control-panel-access/menu-group-management');
  }

  routeToMenuContainerManagement() {
    this.router.navigateByUrl('control-panel/control-panel-access/menu-container-management');
  }

  routeToMenuManagement() {
    this.router.navigateByUrl('control-panel/control-panel-access/menu-management');
  }

  routeToBranchManagement() {
    this.router.navigateByUrl('control-panel/control-panel-access/branch-management');
  }

  routeToCustomUserManagement() {
    this.router.navigateByUrl('control-panel/control-panel-access/custom-user-management');
  }

  routeToCustomUserMenuItemManagement() {
    this.router.navigateByUrl( 'control-panel/control-panel-access/custom-user-menu-item-management');
  }

  routeToManageGroupMembers() {
    this.router.navigateByUrl('control-panel/control-panel-access/group-member-management');
  }

  routeToManageGroupRoles() {
    this.router.navigateByUrl('control-panel/control-panel-access/group-role-management');
  }

  routeToManageGroupMenuItems() {
    this.router.navigateByUrl('control-panel/control-panel-access/group-menu-item-management');
  }

  routeToSystemRoleManagement() {
    this.router.navigateByUrl('control-panel/control-panel-access/role-management');
  }

  routeToSystemPrivilegeManagement() {
    this.router.navigateByUrl('control-panel/control-panel-access/privileges-management');
  }

  routeToMenuItemManagement() {
    this.router.navigateByUrl('control-panel/control-panel-access/menu-item-management');
  }

  routeToManageGroup() {
    this.router.navigateByUrl('control-panel/control-panel-access/user-group-management');
  }

  routeToManageThreeDPrinting() {
    this.router.navigateByUrl('control-panel/printing-management/3D-printing-management');
  }

  routeToThreeDPrintingColor() {
    this.router.navigateByUrl('control-panel/printing-management/3D-printing-color-management');
  }

  routeToThreeDPrintingForm() {
    this.router.navigateByUrl('control-panel/printing-management/3D-printing-form');
}

  getAllMenuContainers() {
    this.controlPanelAccessService.getMenuContainers()
      .subscribe((menuContainerList: MenuContainer[]) => {
        this.menuContainers = menuContainerList;
        console.log(this.menuContainers);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      });
  }

  getAllMenuItems() {
    this.controlPanelAccessService.getAllMenuItems()
      .subscribe((menuItemList: MenuItem[]) => {
        this.menuItems = menuItemList;
        console.log(this.menuContainers);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      });
  }

  getAllMenus() {
    this.controlPanelAccessService.getAllMenus()
      .subscribe((menuList: Menu[]) => {
        this.menus = menuList;
        console.log(this.menus);
      }, (err) => {
        console.log(err);
      });
  }

  getAllMenuGroups() {

  }
}
