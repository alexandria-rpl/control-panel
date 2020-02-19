import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import {UserGroup} from '../../../interfaces/control-panel-access/user-group.interface';
import {User} from '../../../interfaces/control-panel-access/user.interface';
import {MatSelectionList} from '@angular/material';

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

  isAllUnassignedSelected: Boolean = false;
  isAllAssignedSelected: Boolean = false;
  selectAllUnassignedButtonText: String = 'Select All';
  selectAllAssignedButtonText: String = 'Select All';

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

  public toggleUnassignedUsersSelection(unassignedusers: MatSelectionList) {
    if (this.isAllUnassignedSelected === false) {
      this.isAllUnassignedSelected = true;
      this.selectAllUnassignedButtonText = 'Clear All';
      unassignedusers.selectAll();
    } else if (this.isAllUnassignedSelected === true) {
      this.isAllUnassignedSelected = false;
      this.selectAllUnassignedButtonText = 'Select All';
      unassignedusers.deselectAll();
    }
  }

  public toggleAssignedUserSelection(assignedusers: MatSelectionList) {
    if (this.isAllAssignedSelected === false) {
      this.isAllAssignedSelected = true;
      this.selectAllAssignedButtonText = 'Clear All';
      assignedusers.selectAll();
    } else if (this.isAllAssignedSelected === true) {
      this.isAllAssignedSelected = false;
      this.selectAllAssignedButtonText = 'Select All';
      assignedusers.deselectAll();
    }
  }
}
