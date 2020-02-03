import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {LibraryFormsService} from '../../../services/library-form-services/library-forms.service';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';


import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import {ThreeDimensionalPrintingForm} from '../../../interfaces/library-forms/three-dimensional-printing-form.interface';

@Component({
  selector: 'app-three-dimensional-printing-management',
  templateUrl: './three-dimensional-printing-management.component.html',
  styleUrls: ['./three-dimensional-printing-management.component.scss']
})
export class ThreeDimensionalPrintingManagementComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<ThreeDimensionalPrintingForm>;
  displayedColumns: string[] = ['patronName',
                                'libraryCard',
                                'email',
                                'phone',
                                'tosAgreement',
                                'printed',
                                'pickedUp',
                                'finalLocation',
                                'color',
                                'specialInstructions',
                                'fileName',
                                'submitted',
                                'modifiedBy',
                                'printedBy',
                                'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private libraryFormsService: LibraryFormsService,
              private changeDetectorRef: ChangeDetectorRef) { }

  private printingList: ThreeDimensionalPrintingForm[];
  ngOnInit() {
    this.getPrintingColors();
    this.dataSource.paginator = this.paginator;
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPrintingColors() {
    this.libraryFormsService.getThreeDimensionalPrintingRequests()
      .subscribe((printingList: ThreeDimensionalPrintingForm[]) => {
          this.printingList = printingList;
          console.log(this.printingList);
          this.changeDetectorRef.detectChanges();
        }, (err) => {
          console.log(err);
        },
        () => {
          this.dataSource = new MatTableDataSource(this.printingList);
          this.dataSource.sort = this.sort;
          this.dataSource.paginator = this.paginator;
        });
  }

  editRecord(threeDimensionalPrintingForm: ThreeDimensionalPrintingForm) {

  }

  deleteConfirmation(threeDimensionalPrintingForm: ThreeDimensionalPrintingForm) {

  }

  deleteRecord(threeDimensionalPrintingForm: ThreeDimensionalPrintingForm) {

  }

}
