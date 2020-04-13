import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import { User } from '../../../interfaces/control-panel-access/user.interface';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Privilege} from '../../../interfaces/control-panel-access/privilege.interface';
import {BooleanList} from '../../../interfaces/boolean-list/boolean-list.interface';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['userName', 'assigned', 'customUser', 'active', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  private users: User[];
  private errorMessage;

  booleanlist: BooleanList[] = [
    {name: 'True', value: true},
    {name: 'False', value: false}
  ];

  userName: string;
  assigned: boolean;
  custom: boolean;
  active: boolean;

  ngOnInit() {
    this.getAllUsers();
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getAllUsers() {
    this.controlPanelAccessService.getAllUsers()
      .subscribe((userList: User[]) => {
        this.users = userList;
        console.log(this.users);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      }, () => {
        this.dataSource = new MatTableDataSource(this.users);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  editRecord(element: Privilege) {

  }

  deleteConfirmation(element: Privilege) {

  }

  booleanToText(value: Boolean): String {
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

  onSubmit(newUserForm: NgForm) {
    let newUser: User = null;

    if (newUserForm.valid) {
      newUser = newUserForm.value;
      this.controlPanelAccessService.addNewUser(newUser)
        .subscribe(response => {
        }, (err) => {
          this.errorMessage = err;
        }, () => {
          this.getAllUsers();
          this.resetForm(newUserForm);
        });
    }
  }

  resetForm(newUserForm: NgForm) {
    newUserForm.resetForm();
  }
}
