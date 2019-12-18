import { Component, OnInit } from '@angular/core';
import {Task} from '../interfaces/task';
import {IParentTask, ParentTask } from '../interfaces/parentTask';
import { TaskService } from '../taskservice.service';
import { Project, IProject } from '../interfaces/project';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, User } from '../interfaces/user';
import { MatDialog } from '@angular/material';
import { UserdialogComponent } from '../dialogs/userdialog/userdialog.component';
import { ProjectdialogComponent } from '../dialogs/projectdialog/projectdialog.component';
import { ParenttaskdialogComponent } from '../dialogs/parenttaskdialog/parenttaskdialog.component';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {


  submitstatus : boolean=false;
  task: Task = new Task();
  parentTask : IParentTask = new IParentTask(null,null);
  projectList : IProject[];
  errorMessage: String;
  parentList: IParentTask[];
  userList: IUser[];
  id : number;
  searchUserTerm : string ="";
  searchParentTerm : String ="";
  searchProjectTerm : String ="";
  user: User;
  project: Project;

  constructor(public dialog: MatDialog,private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }


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
        next: projects => this.projectList = projects,
        error: err => this.errorMessage = err
      });
      this.taskService.getParentTask().subscribe
    (
      {
        next: parents => this.parentList = parents,
        error: err => this.errorMessage = err
      });
   
  }
  addTask(task : Task)
  {
    if(this.user.userId!=null){
  task.project = this.project;
  task.parentTask = new IParentTask(this.parentTask.parentId, this.searchParentTerm);
  this.user.task=task;
  this.taskService.addTask(this.user).subscribe(data => { if (data) {
    this.task = new Task();
    this.searchParentTerm="";
    this.searchProjectTerm="";
    this.searchUserTerm="";
    }
  });
}
  }

  searchProjects(searchProjectTerm : string)
  {
    this.taskService.getProjects().subscribe
    (
      {
        next: projects => this.projectList = projects,
        error: err => this.errorMessage = err
      });
      if(searchProjectTerm != null)
      {
        var term = searchProjectTerm.toLocaleLowerCase();
        var results : IProject[] = this.projectList
        this.projectList = results.filter( str => {
          return str.projectName.toLowerCase().includes(term.toLowerCase());
        });
      }
      
  }
  searchParentTask(searchParentTerm : string)
  {
    this.taskService.getParentTask().subscribe
    (
      {
        next: parents => this.parentList = parents,
        error: err => this.errorMessage = err
      });
      if(searchParentTerm != null)
      {
        var term = searchParentTerm.toLocaleLowerCase();
        var results : IParentTask[] = this.parentList;
        this.parentList = results.filter( str => {
          return str.parentTask.toLowerCase().includes(term.toLowerCase());
        });
      }
      
  }

  searchUser(searchUserTerm :any)
  {
    this.taskService.getUser().subscribe
    (
      {
        next: users => this.userList = users,
        error: err => this.errorMessage = err
      });
      if(searchUserTerm != null)
      {
        var term = searchUserTerm.toLocaleLowerCase();
        var results : IUser[] = this.userList;
        this.userList = results.filter( str => {
          return str.firstName.toLowerCase().includes(term.toLowerCase());
        });
      }
    }
      openDialog(): void {
        const dialogRef = this.dialog.open(UserdialogComponent, {
          data : this.userList
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result);
          if(result!=null){
            this.user = result;
          this.searchUserTerm=this.user.firstName+" "+this.user.lastName;
          }
        });
      } 

      openProjectDialog(): void {
        const dialogRef = this.dialog.open(ProjectdialogComponent, {
          data : this.projectList
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result);
          if(result!=null){
          this.project = result;
          this.searchProjectTerm=this.project.projectName;
          }
        });
      } 

      openParentDialog(): void {
        const dialogRef = this.dialog.open(ParenttaskdialogComponent, {
          data : this.parentList
        });
    
        dialogRef.afterClosed().subscribe(result => {
          console.log('The dialog was closed');
          console.log(result);
          if(result!=null){
          this.parentTask = result;
          this.searchParentTerm=this.parentTask.parentTask;
          }
        });
      } 

  }
