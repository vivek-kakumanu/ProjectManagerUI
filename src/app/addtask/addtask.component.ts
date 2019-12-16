import { Component, OnInit } from '@angular/core';
import {Task} from '../interfaces/task';
import {IParentTask, ParentTask } from '../interfaces/parentTask';
import { TaskService } from '../taskservice.service';
import { Project, IProject } from '../interfaces/project';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser, User } from '../interfaces/user';


@Component({
  selector: 'app-addtask',
  templateUrl: './addtask.component.html',
  styleUrls: ['./addtask.component.css']
})
export class AddtaskComponent implements OnInit {


  submitstatus : boolean=false;
  task: Task = new Task();
  parentTask : IParentTask;
  projectList : IProject[];
  errorMessage: String;
  parentList: IParentTask[];
  userList: IUser[];
  id : number;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
   
  }
  addTask(user : Task)
  {
  user.parentTask = new IParentTask(this.parentList[this.id].parentId, this.parentList[this.id].parentTask);
  console.log(this.parentList[this.id]);  
  console.log(user.parentTask.parentTask,user.priority); 
  }

  getProjects()
  {
    this.taskService.getProjects().subscribe
    (
      {
        next: projects => this.projectList = projects,
        error: err => this.errorMessage = err
      });
  }
  getParents()
  {
    this.taskService.getParentTask().subscribe
    (
      {
        next: parents => this.parentList = parents,
        error: err => this.errorMessage = err
      });
  }
  getUsers()
  {
    this.taskService.getUser().subscribe
    (
      {
        next: users => this.userList = users,
        error: err => this.errorMessage = err
      });

  }
  }
