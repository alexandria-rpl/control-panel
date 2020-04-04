import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef, MatSelectionList} from '@angular/material';
import {MenuGroup} from '../../../interfaces/control-panel-access/menu-group.interface';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import {MenuItem} from '../../../interfaces/control-panel-access/menu-item.interface';
import {ObjectID} from 'bson';

@Component({
  selector: 'app-menu-group-details',
  templateUrl: './menu-group-details.component.html',
  styleUrls: ['./menu-group-details.component.scss']
})
export class MenuGroupDetailsComponent implements OnInit {

  private menuItems: MenuItem[];
  private menuGroups: MenuGroup[];
  private menuItemsToSubmit: MenuItem[];
  existingMenuGroups: MenuGroup[];
  existingMenuItems: MenuItem[];
  selectedItemsToAdd: MenuItem[];
  toggleSelectedMenuItemsToRemove = false;
  toggleSelectedMenuGroupsToRemove = false;
  toggleSelectedMenuItemsToAdd = false;
  toggleSelectedMenuGroupsToAdd = false;
  menuGroupsAddButtonText = 'Select All';
  menuGroupItemsAddButtonText = 'Select All';
  menuGroupsRemoveButtonText = 'Select All';
  menuGroupItemsRemoveButtonText = 'Select All';

  private me: string = this.data.menuGroupName;
  private errorMessage: any;

  constructor(
    public dialogRef: MatDialogRef<MenuGroupDetailsComponent>,
    private controlPanelAccessService: ControlPanelAccessService,
    @Inject(MAT_DIALOG_DATA) public data: MenuGroup) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.existingMenuGroups = this.data.menuGroups;
    this.existingMenuItems = this.data.menuItems;
    this.getAllMenuItems();
    this.getAllMenuGroups();
  }

  getAllMenuItems() {
    this.controlPanelAccessService.getAllMenuItems()
      .subscribe((menuItemList: MenuItem[]) => {
        this.menuItems = menuItemList;
        console.log(this.menuItems);
      }, (err) => {
        console.log(err);
      }, () => {
        console.log(this.menuItems);
      });
  }

  getAllMenuGroups() {
    this.controlPanelAccessService.getAllMenuGroups()
      .subscribe((menuGroupList: MenuGroup[]) => {
        this.menuGroups = menuGroupList;
        console.log(this.menuGroups);
      }, (err) => {
        console.log(err);
      }, () => {
        console.log(this.menuGroups);
      });
  }

  addMenuItemToCurrentMenuGroup() {
    if (this.selectedItemsToAdd === null) {
      return;
    } else {
      console.log(this.selectedItemsToAdd);
      console.log(this.data.menuGroupId);
      this.menuItemsToSubmit = this.selectedItemsToAdd;
      // this.ObjectIdToString(this.data._id);
      this.controlPanelAccessService.addItemsToExistingMenuGroup(this.data.menuGroupId, this.menuItemsToSubmit)
        .subscribe( response => {
      }, (err) => {
          this.errorMessage = err;
      });
    }
  }

  hideMeFromMenuGroupList(element: MenuGroup): boolean {
    if (element.menuGroupName === this.me) {
      return false;
    } else {
      return true;
    }
  }

  hideMeFromItemList(element: MenuItem) {

  }

  toggleButton(button: string, element: MatSelectionList) {
    switch (button) {
      case 'addMenuItemsButton':
          if (this.toggleSelectedMenuItemsToAdd === false) {
            this.toggleSelectedMenuItemsToAdd = true;
            this.menuGroupItemsAddButtonText = 'Clear Selection';
            element.selectAll();
          } else if (this.toggleSelectedMenuItemsToAdd === true) {
            this.toggleSelectedMenuItemsToAdd = false;
            this.menuGroupItemsAddButtonText = 'Select All';
            element.deselectAll();
          }
        break;
      case 'removeMenuItemsButton':
        if (this.toggleSelectedMenuItemsToRemove === false) {
          this.toggleSelectedMenuItemsToRemove = true;
          this.menuGroupItemsRemoveButtonText = 'Clear Selection';
          element.selectAll();
        } else if (this.toggleSelectedMenuItemsToRemove === true) {
          this.toggleSelectedMenuItemsToRemove = false;
          this.menuGroupItemsRemoveButtonText = 'Select All';
          element.deselectAll();
        }
        break;
      case 'addMenuGroupsButton':
        if (this.toggleSelectedMenuGroupsToAdd === false) {
          this.toggleSelectedMenuGroupsToAdd = true;
          this.menuGroupsAddButtonText = 'Clear Selection';
          element.selectAll();
        } else if (this.toggleSelectedMenuGroupsToAdd === true) {
          this.toggleSelectedMenuGroupsToAdd = false;
          this.menuGroupsAddButtonText = 'Select All';
          element.deselectAll();
        }
        break;
      case 'removeMenuGroupsButton':
        if (this.toggleSelectedMenuGroupsToRemove === false) {
          this.toggleSelectedMenuGroupsToRemove = true;
          this.menuGroupsRemoveButtonText = 'Clear Selection';
          element.selectAll();
        } else if (this.toggleSelectedMenuGroupsToRemove === true) {
          this.toggleSelectedMenuGroupsToRemove = false;
          this.menuGroupsRemoveButtonText = 'Select All';
          element.deselectAll();
        }
        break;
    }
  }
}
