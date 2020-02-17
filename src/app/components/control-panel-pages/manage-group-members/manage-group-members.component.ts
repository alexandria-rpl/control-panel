import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import {UserGroup} from '../../../interfaces/control-panel-access/user-group.interface';
import {User} from '../../../interfaces/control-panel-access/user.interface';

@Component({
  selector: 'app-manage-group-members',
  templateUrl: './manage-group-members.component.html',
  styleUrls: ['./manage-group-members.component.scss']
})
export class ManageGroupMembersComponent implements OnInit {

  userGroups: UserGroup[] = [];
  currentUserGroup: UserGroup = null;
  unassignedUsers: User[] = [];
  assignedUsers: User[] = [];

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllGroups();
    this.getAllUnAssignedUsers();
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

  private getAllUnAssignedUsers() {
    this.controlPanelAccessService.getAllUnAssignedUsers()
      .subscribe((usersList: User[]) => {
        this.unassignedUsers = usersList;
        console.log(this.unassignedUsers);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      });
  }

  private getGroupInformation(group: UserGroup) {
    this.currentUserGroup = group;
    this.assignedUsers = this.currentUserGroup.users;
  }
}
