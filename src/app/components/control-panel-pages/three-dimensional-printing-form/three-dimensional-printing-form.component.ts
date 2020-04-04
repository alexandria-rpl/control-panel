import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import { faFolderOpen, faUpload, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import {ThreeDimensionalPrintingColor} from '../../../interfaces/static-data/three-dimensional-printing-color.interface';
import {LibraryFormsService} from '../../../services/library-form-services/library-forms.service';
import { PatronInfo } from '../../../interfaces/patron-info/patron-info.interface';
import {ThreeDimensionalTosComponent} from '../../extended-components/three-dimensional-tos/three-dimensional-tos.component';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-three-dimensional-printing-form',
  templateUrl: './three-dimensional-printing-form.component.html',
  styleUrls: ['./three-dimensional-printing-form.component.scss']
})
export class ThreeDimensionalPrintingFormComponent implements OnInit {

  faFolderOpen = faFolderOpen;
  faUpload = faUpload;
  faTrashAlt = faTrashAlt;
  printingColorList: ThreeDimensionalPrintingColor[];
  printUpload: any;
  selectedFile: File;
  printUploadText: any;
  selectedColor: 'any';
  private patronInfo: PatronInfo;
  name: any;
  card: any;
  email: any;
  phone: any;
  tos: any;
  uploading: boolean;


  constructor(private libraryFormsService: LibraryFormsService,
              private changeDetectorRef: ChangeDetectorRef,
              public dialog: MatDialog) { }

  ngOnInit() {
    /* get printing color list */
    this.getPrintingColors();
    this.printUploadText = 'No file chosen...';
    this.uploading = false;
  }

  uploadPrint() {

  }

  removePrint() {

  }

  onFileChanged(event) {
    this.selectedFile = event.target.files[0];
    if (event.target.files[0] === undefined || null || '') {
      this.printUploadText = 'No file chosen...';
    } else {
      this.printUploadText = this.selectedFile.name;
    }

    this.uploading = true;

  }

  getPrintingColors() {
    this.libraryFormsService.getPrintingColors()
      .subscribe((printingColors: ThreeDimensionalPrintingColor[]) => {
          this.printingColorList = printingColors;
          console.log(this.printingColorList)
          this.changeDetectorRef.detectChanges();
        }, (err) => {
          console.log(err);
        },
        () => {
          this.printingColorList = this.printingColorList;
        });
  }

  getPatronInfo(libraryCard: string) {
    this.libraryFormsService.getPatronInfoByLibraryCard(libraryCard)
      .subscribe((patronDetails: PatronInfo) => {
        this.patronInfo = patronDetails;
        console.log(this.patronInfo);
        this.changeDetectorRef.detectChanges();
      }, (err) => {
        console.log(err);
      });
  }
  submitPrintRequest() {
    console.log(this.name);
    console.log(this.card);
    console.log(this.email);
    console.log(this.phone);
    console.log(this.selectedColor);
    console.log(this.selectedFile);

    this.showTOS();
      /* get form values */
      /* get Patron info */

    /***** Only submit print request the below checks are true */
      /* check if pCode1 != z */
      /* check if moneyOwed is >= 25.00 */
  }

  showTOS(): void {
    const dialogRef = this.dialog.open(ThreeDimensionalTosComponent, {
      width: '1000px',
      disableClose: true
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
}
