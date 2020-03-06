import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import {NgForm} from '@angular/forms';
import {BooleanList} from '../../../interfaces/boolean-list/boolean-list.interface';
import {Menu} from '../../../interfaces/control-panel-access/menu.interface';
import {MenuGroup} from '../../../interfaces/control-panel-access/menu-group.interface';
import {MenuGroupDetailsComponent} from '../../extended-components/menu-group-details/menu-group-details.component';

@Component({
  selector: 'app-manage-menu-groups',
  templateUrl: './manage-menu-groups.component.html',
  styleUrls: ['./manage-menu-groups.component.scss']
})
export class ManageMenuGroupsComponent implements OnInit {

  faEdit = faEdit;
  faEye = faEye;
  faTrash = faTrash;

  dataSource: MatTableDataSource<MenuGroup>;
  displayedColumns: string[] = ['menuGroupName', 'menuGroupDisplayName',
    'menuGroupDescription', 'menuPosition', 'isActive', 'isVisible', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef,
              public dialog: MatDialog) { }

  private menuGroups: MenuGroup[];
  private errorMessage;
  private booleanlist: BooleanList[] = [
    {name: 'True', value: true},
    {name: 'False', value: false}
  ];
  menuGroupName: string;
  menuGroupDisplayName: string;
  menuGroupDescription: string;
  menuPosition: number;
  activeStatus: string;
  visibleStatus: string;

  ngOnInit() {
    this.getAllMenuGroups();
  }

  getAllMenuGroups() {
    this.controlPanelAccessService.getAllMenuGroups()
      .subscribe((menuGroupList: MenuGroup[]) => {
        this.menuGroups = menuGroupList;
        console.log(this.menuGroups);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      }, () => {
        this.dataSource = new MatTableDataSource(this.menuGroups);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
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

  editRecord(element: MenuGroup) {

  }

  onSubmit(newMenuForm: NgForm) {

  }

  deleteConfirmation(element: MenuGroup) {

  }

  viewRecord(element: MenuGroup): void {
      const dialogRef = this.dialog.open(MenuGroupDetailsComponent, {
        width: '1000px',
        data: element,
        disableClose: true
      });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
