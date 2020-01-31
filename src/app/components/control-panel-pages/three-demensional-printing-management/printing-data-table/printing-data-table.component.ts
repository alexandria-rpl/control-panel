import {Component, OnInit, ChangeDetectorRef, ViewChild} from '@angular/core';
import { ThreeDimensionalPrintingColor } from '../../../../interfaces/static-data/three-dimensional-printing-color.interface';
import { ThreeDimensionalPrintingForm } from '../../../../interfaces/library-forms/three-dimensional-printing-form.interface';
import { environment } from '../../../../../environments/environment';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';

@Component({
  selector: 'app-printing-data-table',
  templateUrl: './printing-data-table.component.html',
  styleUrls: ['./printing-data-table.component.scss']
})
export class PrintingDataTableComponent implements OnInit {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private threeDimensionalPrintingForms: ThreeDimensionalPrintingForm[];

  constructor(private libraryFormsService,
              private changeDetectorRef: ChangeDetectorRef) { }

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns: string[] = ['_id', 'patronName', 'libraryCard', 'email', 'phone', 'tosAgreement'];

  /** Initializing Datasource */
  dataSource: MatTableDataSource<ThreeDimensionalPrintingForm[]> = new MatTableDataSource<ThreeDimensionalPrintingForm[]>();

  ngOnInit() {
    /** Fetch Data */
    this.getAllPrintingRequestForms();
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  /** Data Subscription Function */
  getAllPrintingRequestForms() {
    this.libraryFormsService.getAllPrintingRequestForms()
      .subscribe((threeDimensionalPrintingFormList: ThreeDimensionalPrintingForm[]) => {
        this.threeDimensionalPrintingForms = threeDimensionalPrintingFormList;
        console.log('Development Environment: ' + environment.development);
        if (environment.development === true) {
          console.log(this.threeDimensionalPrintingForms);
          this.changeDetectorRef.detectChanges();
        }
      }, (err) => {
        if (environment.development === true) {
         console.log(err);
        }
      },
      () => {
        this.dataSource = this.threeDimensionalPrintingForms;
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }
}
