import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {UserGroup} from '../../../interfaces/control-panel-access/user-group.interface';
import {User} from '../../../interfaces/control-panel-access/user.interface';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import {Role} from '../../../interfaces/control-panel-access/role.interface';

@Component({
  selector: 'app-manage-group-roles',
  templateUrl: './manage-group-roles.component.html',
  styleUrls: ['./manage-group-roles.component.scss']
})
export class ManageGroupRolesComponent implements OnInit {

  userGroups: UserGroup[] = [];
  currentUserGroup: UserGroup = null;
  unassignedRoles: Role[] = [];
  assignedUsers: User[] = [];

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllGroups();
    this.getAllGroupRoles();
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

  private getAllGroupRoles() {
    this.controlPanelAccessService.getAllRoles()
      .subscribe((roleList: Role[]) => {
        this.unassignedRoles = roleList;
        console.log(this.unassignedRoles);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      });
  }

  getGroupInformation(value: any) {
  }
}
