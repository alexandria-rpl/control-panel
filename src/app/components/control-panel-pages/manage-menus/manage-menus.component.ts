import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {NgForm} from '@angular/forms';
import {BooleanList} from '../../../interfaces/boolean-list/boolean-list.interface';
import {Menu} from '../../../interfaces/control-panel-access/menu.interface';
import {MenuContainer} from '../../../interfaces/control-panel-access/menu-container.interface';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-manage-menus',
  templateUrl: './manage-menus.component.html',
  styleUrls: ['./manage-menus.component.scss']
})
export class ManageMenusComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<Menu>;
  displayedColumns: string[] = ['menuName', 'menuDisplayName',
    'menuDescription', 'menuPosition', 'menuContainerId', 'isActive', 'isVisible', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private menuContainers: MenuContainer[];
  private container: MenuContainer;

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  private menus: Menu[];
  private errorMessage;
  private booleanlist: BooleanList[] = [
    {name: 'True', value: true},
    {name: 'False', value: false}
  ];
  menuName: string;
  menuDisplayName: string;
  menuDescription: string;
  menuWarning: string;
  menuPosition: string;
  menuContainer: string;
  activeStatus: string;
  visibleStatus: string;

  ngOnInit() {
    this.getAllMenus();
    this.getAllMenuContainers();
  }

  getAllMenus() {
    this.controlPanelAccessService.getAllMenus()
      .subscribe((menuList: Menu[]) => {
        this.menus = menuList;
        console.log(this.menus);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      }, () => {
        this.dataSource = new MatTableDataSource(this.menus);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  getAllMenuContainers() {
    this.controlPanelAccessService.getMenuContainers()
      .subscribe((menuContainerList: MenuContainer[]) => {
        this.menuContainers = menuContainerList;
        console.log(this.menus);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
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

  editRecord(element: Menu) {

  }

  onSubmit(newMenuForm: NgForm) {

  }

  deleteConfirmation(element: Menu) {

  }

  findContainerDisplayName(containerId: string) {
    if (this.menuContainers !== null) {
      let i;
      for ( i in this.menuContainers) {
        if (this.menuContainers[i]._id === containerId) {
          return this.menuContainers[i].containerDisplayName;
        }
      }
    }
  }
}
