import { Component, OnInit, Inject } from '@angular/core';
import { ParentTask, IParentTask } from 'src/app/interfaces/parentTask';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-parenttaskdialog',
  templateUrl: './parenttaskdialog.component.html',
  styleUrls: ['./parenttaskdialog.component.css']
})
export class ParenttaskdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ParenttaskdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IParentTask[]) {}

  ngOnInit() {
  }

}
