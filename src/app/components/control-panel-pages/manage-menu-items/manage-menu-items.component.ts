import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {Privilege} from '../../../interfaces/control-panel-access/privilege.interface';
import {MenuItem} from '../../../interfaces/control-panel-access/menu-item.interface';

@Component({
  selector: 'app-manage-menu-items',
  templateUrl: './manage-menu-items.component.html',
  styleUrls: ['./manage-menu-items.component.scss']
})
export class ManageMenuItemsComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<MenuItem>;
  displayedColumns: string[] = ['menuItemName', 'menuItemDescription', 'componentName', 'url', 'active', 'visible', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  menuItems: MenuItem[];

  ngOnInit() {
    this.getAllMenuItems();
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  private getAllMenuItems() {
    this.controlPanelAccessService.getAllMenuItems()
      .subscribe((menuItemList: MenuItem[]) => {
          this.menuItems = menuItemList;
          console.log(this.menuItems);
          this.changeDetectorRef.detectChanges();
        }, (err) => {
          console.log(err);
        },
        () => {
          this.dataSource = new MatTableDataSource(this.menuItems);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
  }

  editRecord(element: Privilege) {

  }

  deleteConfirmation(element: Privilege) {

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
