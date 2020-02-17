import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {UserGroup} from '../../../interfaces/control-panel-access/user-group.interface';
import {Privilege} from '../../../interfaces/control-panel-access/privilege.interface';

@Component({
  selector: 'app-manage-user-groups',
  templateUrl: './manage-user-groups.component.html',
  styleUrls: ['./manage-user-groups.component.scss']
})
export class ManageUserGroupsComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<UserGroup>;
  displayedColumns: string[] = ['groupName', 'groupDescription', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  private userGroups: UserGroup[];

  ngOnInit() {
    this.getAllUserGroups();
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getAllUserGroups() {
    this.controlPanelAccessService.getAllUserGroups()
      .subscribe((userGroupList: UserGroup[]) => {
        this.userGroups = userGroupList;
        console.log(this.userGroups);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      },
        () => {
        this.dataSource = new MatTableDataSource(this.userGroups);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        });
    }

  editRecord(element: UserGroup) {

  }

  deleteConfirmation(element: UserGroup) {

  }

  booleanToText(value: Boolean): String {
    console.log(value);
    let returnValue = '';
    if (value === false ) {
      returnValue = 'No';
      return returnValue;
    }

    if (value === true ) {
      returnValue = 'Yes';
      return returnValue;
    }
  }
}
