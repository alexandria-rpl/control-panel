import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {ControlPanelAccessService} from '../../../services/control-panel-access-service/control-panel-access.service';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-three-dimensional-tos',
  templateUrl: './three-dimensional-tos.component.html',
  styleUrls: ['./three-dimensional-tos.component.scss']
})
export class ThreeDimensionalTosComponent implements OnInit {

  faCircle = faCircle;

  constructor(public dialogRef: MatDialogRef<ThreeDimensionalTosComponent>,
              private controlPanelAccessService: ControlPanelAccessService,
    @Inject(MAT_DIALOG_DATA) public printerTOS: any) { }

  ngOnInit() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
