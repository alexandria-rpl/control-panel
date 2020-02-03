import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import {LibraryFormsService} from '../../../services/library-form-services/library-forms.service';
import {ThreeDimensionalPrintingColor} from '../../../interfaces/static-data/three-dimensional-printing-color.interface';
import {MatTableDataSource, MatPaginator, MatSort} from '@angular/material';
import { Subscription } from 'rxjs';

import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-three-dimensional-printing-colors',
  templateUrl: './three-dimensional-printing-colors.component.html',
  styleUrls: ['./three-dimensional-printing-colors.component.scss']
})
export class ThreeDimensionalPrintingColorsComponent implements OnInit {

  faEdit = faEdit;
  faTrash = faTrash;

  dataSource: MatTableDataSource<ThreeDimensionalPrintingColor>;
  displayedColumns: string[] = ['color', 'hexValue', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private libraryFormsService: LibraryFormsService,
              private changeDetectorRef: ChangeDetectorRef) { }

  private printingColorList: ThreeDimensionalPrintingColor[];
  ngOnInit() {
    this.getPrintingColors();
    this.dataSource.paginator = this.paginator;
  }

  /** Filter Action */
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  getPrintingColors() {
    this.libraryFormsService.getPrintingColors()
      .subscribe((printingColors: ThreeDimensionalPrintingColor[]) => {
        this.printingColorList = printingColors;
        console.log(this.printingColorList);
          this.changeDetectorRef.detectChanges();
        }, (err) => {
          console.log(err);
        },
        () => {
        this.dataSource = new MatTableDataSource(this.printingColorList);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      });
  }

  editRecord() {

  }

  deleteConfirmation(threeDimensionalPrintingColor: ThreeDimensionalPrintingColor) {

  }

  deleteRecord(threeDimensionalPrintingColor: ThreeDimensionalPrintingColor) {

  }
}
