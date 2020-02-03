import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort } from '@angular/material';
import { PrintingManagementDatatableDataSource } from './printing-management-datatable-datasource';

@Component({
  selector: 'app-printing-management-datatable',
  templateUrl: './printing-management-datatable.component.html',
  styleUrls: ['./printing-management-datatable.component.css']
})
export class PrintingManagementDatatableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource: PrintingManagementDatatableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  ngOnInit() {
    this.dataSource = new PrintingManagementDatatableDataSource(this.paginator, this.sort);
  }
}
