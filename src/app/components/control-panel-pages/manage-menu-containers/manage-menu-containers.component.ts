import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {MenuContainer} from '../../../interfaces/control-panel-access/menu-container.interface';
import {NgForm} from '@angular/forms';
import {BooleanList} from '../../../interfaces/boolean-list/boolean-list.interface';

@Component({
  selector: 'app-manage-menu-containers',
  templateUrl: './manage-menu-containers.component.html',
  styleUrls: ['./manage-menu-containers.component.scss']
})
export class ManageMenuContainersComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<MenuContainer>;
  displayedColumns: string[] = ['containerName', 'containerDisplayName',
    'containerDescription', 'containerType', 'isActive', 'isVisible', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private controlPanelAccessService: ControlPanelAccessService,
              private changeDetectorRef: ChangeDetectorRef) { }

  private menuContainers: MenuContainer[];
  booleanlist: BooleanList[] = [
    {name: 'True', value: true},
    {name: 'False', value: false}
  ];

  private errorMessage;
  newMenuContainerForm: NgForm;
  visibleStatus: boolean;
  activeStatus: boolean;
  containerType: string;
  containerDisplayName: string;
  containerName: string;

  ngOnInit() {
    this.getAllMenuContainers();
  }

  getAllMenuContainers() {
    this.controlPanelAccessService.getMenuContainers()
      .subscribe((menuContainerList: MenuContainer[]) => {
        this.menuContainers = menuContainerList;
        console.log(this.menuContainers);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      }, () => {
        this.dataSource = new MatTableDataSource(this.menuContainers);
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

  editRecord(element: MenuContainer) {

  }

  onSubmit(newMenuContainerForm: NgForm) {

  }
}
