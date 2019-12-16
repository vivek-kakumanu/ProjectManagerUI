import { Component, OnInit, Inject } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-userdialog',
  templateUrl: './userdialog.component.html',
  styleUrls: ['./userdialog.component.css']
})
export class UserdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<UserdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IUser[]) {}


  ngOnInit() {
  }

}
