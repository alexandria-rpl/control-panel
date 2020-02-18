import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Privilege} from '../../../interfaces/control-panel-access/privilege.interface';
import {NgForm} from '@angular/forms';
@Component({
  selector: 'app-manage-privileges',
  templateUrl: './manage-privileges.component.html',
  styleUrls: ['./manage-privileges.component.scss']
})
export class ManagePrivilegesComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<Privilege>;
  displayedColumns: string[] = ['privilegeName', 'privilegeDescription', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private errorMessage: any;

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  private privileges: Privilege[];
  privilegeName: string = null;
  privilegeDescription: string = null;

  ngOnInit() {
    this.getPrivileges();
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getPrivileges() {
    this.controlPanelAccessService.getAllPrivileges()
      .subscribe((privilegeList: Privilege[]) => {
        this.privileges = privilegeList;
        console.log(this.privileges);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      },
        () => {
        this.dataSource = new MatTableDataSource(this.privileges);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
       });
  }

  editRecord(element: Privilege) {

  }

  deleteConfirmation(element: Privilege) {

  }

  onSubmit(newPrivilegeForm: NgForm) {
    let newPrivilege: Privilege = null;

    if (newPrivilegeForm.valid) {
      newPrivilege = newPrivilegeForm.value;
      this.controlPanelAccessService.addNewPrivilege(newPrivilege)
        .subscribe(response => {
      }, (err) => {
          this.errorMessage = err;
      }, () => {
          this.getPrivileges();
          this.resetForm(newPrivilegeForm);
      });
    }
  }

  resetForm(newPrivilegeForm: NgForm) {
    newPrivilegeForm.resetForm();
  }
}
