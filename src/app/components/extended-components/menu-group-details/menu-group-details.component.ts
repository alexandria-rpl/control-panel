import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {MenuGroup} from '../../../interfaces/control-panel-access/menu-group.interface';

@Component({
  selector: 'app-menu-group-details',
  templateUrl: './menu-group-details.component.html',
  styleUrls: ['./menu-group-details.component.scss']
})
export class MenuGroupDetailsComponent implements OnInit {

  typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor(
    public dialogRef: MatDialogRef<MenuGroupDetailsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MenuGroup) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
