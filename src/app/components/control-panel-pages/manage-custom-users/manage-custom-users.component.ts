import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import {User} from '../../../interfaces/control-panel-access/user.interface';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Privilege} from '../../../interfaces/control-panel-access/privilege.interface';
import {CustomUser} from '../../../interfaces/control-panel-access/custom-user.interface';

@Component({
  selector: 'app-manage-custom-users',
  templateUrl: './manage-custom-users.component.html',
  styleUrls: ['./manage-custom-users.component.scss']
})
export class ManageCustomUsersComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<CustomUser>;
  displayedColumns: string[] = ['userName', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  users: User[] = [];
  private customUsers: CustomUser[] = [];
  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.getAllUsers();
    this.getAllCustomUsers();
  }

  private getAllUsers() {
    this.controlPanelAccessService.getAllUsers()
      .subscribe((userList: User[]) => {
        this.users = userList;
        console.log(this.users);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      });
  }

  private getAllCustomUsers() {
    this.controlPanelAccessService.getAllCustomUsers()
      .subscribe((customUserList: CustomUser[]) => {
        this.customUsers = customUserList;
        console.log(this.customUsers);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      }, () => {
        this.dataSource = new MatTableDataSource(this.customUsers);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  showUserChangeDialog(value: User) {

  }


  editRecord(element: Privilege) {

  }

  deleteConfirmation(element: Privilege) {

  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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
