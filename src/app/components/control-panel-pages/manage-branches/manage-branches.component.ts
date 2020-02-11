import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {LibraryFormsService} from '../../../services/library-form-services/library-forms.service';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { Subscription } from 'rxjs';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import {Role} from '../../../interfaces/control-panel-access/role.interface';
import {Branch} from '../../../interfaces/control-panel-access/branch.interface';

@Component({
  selector: 'app-manage-branches',
  templateUrl: './manage-branches.component.html',
  styleUrls: ['./manage-branches.component.scss']
})
export class ManageBranchesComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<Branch>;
  displayedColumns: string[] = ['branchName', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  private branches: Branch[];

  ngOnInit() {
     this.getBranches();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getBranches() {
    this.controlPanelAccessService.getBranches()
      .subscribe((branchList: Branch[]) => {
        this.branches = branchList;
        console.log(this.branches);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      }, () => {
        this.dataSource = new MatTableDataSource(this.branches);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  editRecord(element: Branch) {

  }

  deleteConfirmation(element: Branch) {

  }
}
