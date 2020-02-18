import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {LibraryFormsService} from '../../../services/library-form-services/library-forms.service';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { Subscription } from 'rxjs';
import {Role} from '../../../interfaces/control-panel-access/role.interface';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-role-management',
  templateUrl: './role-management.component.html',
  styleUrls: ['./role-management.component.scss']
})
export class RoleManagementComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<Role>;
  displayedColumns: string[] = ['roleName', 'roleDescription', 'privileges', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private errorMessage: any;

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  private roles: Role[];
  roleName: string = null;
  roleDescription: string = null;

  ngOnInit() {
    this.getRoles();
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getRoles() {
    this.controlPanelAccessService.getAllRoles()
      .subscribe((roleList: Role[]) => {
        this.roles = roleList;
        console.log(this.roles);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      },
        () => {
        this.dataSource = new MatTableDataSource(this.roles);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        });
  }

  editRecord(element: Role) {

  }

  deleteConfirmation(element: Role) {

  }

  onSubmit(newRoleForm: NgForm) {
    let newRole: Role = null;

    if(newRoleForm.valid) {
      newRole = newRoleForm.value;
      this.controlPanelAccessService.addNewRole(newRole)
        .subscribe(response => {
        }, (err) => {
          this.errorMessage = err;
        }, () => {
          this.getRoles();
          this.resetForm(newRoleForm);
        });
    }
  }

  resetForm(newRoleForm: NgForm) {
    newRoleForm.resetForm();
  }
}
