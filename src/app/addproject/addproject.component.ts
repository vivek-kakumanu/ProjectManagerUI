import { Component, OnInit } from '@angular/core';
import { TaskService } from '../taskservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project, IProject } from '../interfaces/project';
import { IUser, User } from '../interfaces/user';
import { MatDialog } from '@angular/material';
import { UserdialogComponent } from '../dialogs/userdialog/userdialog.component';

@Component({
  selector: 'app-addproject',
  templateUrl: './addproject.component.html',
  styleUrls: ['./addproject.component.css']
})
export class AddprojectComponent implements OnInit {

  marked = false;
  theCheckbox = false;
  project : Project = new Project();
  priority : number =10;
  searchTerm: string ="";
  userList: IUser[];
  errorMessage: any;
  user: User;
  projectList: IProject[];
  _projectFilter: string;

  openDialog(): void {
    const dialogRef = this.dialog.open(UserdialogComponent, {
      data : this.userList
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.user = result;
      if(result!=null){
        this.searchTerm=this.user.firstName+" "+this.user.lastName;
        }
    });
  } 

  constructor( public dialog: MatDialog, private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.taskService.getUser().subscribe
    (
      {
        next: users => this.userList = users,
        error: err => this.errorMessage = err
      });
      this.taskService.getProjects().subscribe
    (
      {
        next: project => this.projectList = project,
        error: err => this.errorMessage = err
      });
      this.project.startDate= new Date();
      this.project.endDate= new Date();
      this.project.endDate.setDate(this.project.endDate.getDate()+1);
  }

  searchMangers(searchTerm : any)
  {
    this.taskService.getUser().subscribe
    (
      {
        next: users => this.userList = users,
        error: err => this.errorMessage = err
      });

    if(searchTerm != null)
    {
      var term = searchTerm.toLocaleLowerCase();
      var results : IUser[] = this.userList;
      this.userList = results.filter( str => {
        return str.firstName.toLowerCase().includes(term.toLowerCase());
      });
    }
    
      console.log(this.userList);
  }

  addProject(project : Project)
  {
    console.log(this.project);
    console.log('add project');
    this.user.project=project;
    console.log(this.user);
    this.taskService.addProject(this.user).subscribe(data => { if (data) {
      this.taskService.getProjects().subscribe
    (
      {
        next: project => this.projectList = project,
        error: err => this.errorMessage = err
      });
      this.project= new Project();
      this.searchTerm="";
      }
    });
  }

  sortByStartDate()
  {
    this.projectList.sort(sortByStartDate);
  }
  sortByEndDate()
  {
    this.projectList.sort(sortByEndDate);
  }
  sortByPriority()
  {
    this.projectList.sort(sortByPriority);
  }
  
}
function  sortByStartDate(s1 : Project, s2 : Project) 
  {
    if (s1.startDate > s2.startDate) return 1
    else if (s1.startDate === s2.endDate) return 0
    else return -1
  }
  function  sortByEndDate(s1 : Project, s2 : Project) 
  {
    if (s1.endDate > s2.endDate) return 1
    else if (s1.endDate === s2.endDate) return 0
    else return -1
  }
  function  sortByPriority(s1 : Project, s2 : Project) 
  {
    if (s1.priority > s2.priority) return 1
    else if (s1.priority === s2.priority) return 0
    else return -1
  }

