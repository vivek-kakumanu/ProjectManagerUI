import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Project } from 'src/app/interfaces/project';

@Component({
  selector: 'app-projectdialog',
  templateUrl: './projectdialog.component.html',
  styleUrls: ['./projectdialog.component.css']
})
export class ProjectdialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ProjectdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Project[]) {}

  ngOnInit() {
  }

}
