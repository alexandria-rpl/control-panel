import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import { User } from '../../../interfaces/control-panel-access/user.interface';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Privilege} from '../../../interfaces/control-panel-access/privilege.interface';

@Component({
  selector: 'app-manage-users',
  templateUrl: './manage-users.component.html',
  styleUrls: ['./manage-users.component.scss']
})
export class ManageUsersComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<User>;
  displayedColumns: string[] = ['userName', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  private users: User[];

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
}
