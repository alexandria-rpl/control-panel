import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserGroup} from '../../../interfaces/control-panel-access/user-group.interface';
import {User} from '../../../interfaces/control-panel-access/user.interface';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import {MenuItem} from '../../../interfaces/control-panel-access/menu-item.interface';

@Component({
  selector: 'app-manage-group-menu-items',
  templateUrl: './manage-group-menu-items.component.html',
  styleUrls: ['./manage-group-menu-items.component.scss']
})
export class ManageGroupMenuItemsComponent implements OnInit {

  userGroups: UserGroup[] = [];
  currentUserGroupMenuItems: MenuItem[] = null;
  menuItems: MenuItem[] = [];
  assignedUsers: User[] = [];

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllGroups();
    this.getAllMenuItems();
  }

  private getAllGroups() {
    this.controlPanelAccessService.getAllUserGroups()
      .subscribe((userGroupList: UserGroup[]) => {
        this.userGroups = userGroupList;
        console.log(this.userGroups);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      });
  }

  private getAllMenuItems() {
    this.controlPanelAccessService.getAllMenuItems()
      .subscribe((menuItemList: MenuItem[]) => {
        this.menuItems = menuItemList;
        console.log(this.menuItems);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      });
  }

  getGroupInformation(group: UserGroup) {
    this.currentUserGroupMenuItems = group.menuItems;
  }
}
