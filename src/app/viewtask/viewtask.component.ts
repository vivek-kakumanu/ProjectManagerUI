import { Component, OnInit } from '@angular/core';
import { TaskService } from '../taskservice.service';
import { ITask, Task } from '../interfaces/task';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject, Project } from '../interfaces/project';
import { MatDialog } from '@angular/material';
import { ProjectdialogComponent } from '../dialogs/projectdialog/projectdialog.component';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css'],
})
export class ViewtaskComponent implements OnInit {
 
pageTittle : string = "View Task"
tasksList : Task[];
errorMessage : string;

_taskFilter;
parentTaskFilter;
priorityFrom;
priorityTo;
start_Date;
end_Date;
projectList: IProject[];
project: Project = new Project();
searchProjectTerm;

  get taskFilter(): string {
    return this._taskFilter;
  }
  set taskFilter(value: string) {
    this._taskFilter = value;
     }

     constructor(public dialog: MatDialog,private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  endTask(task : Task)
  {
    console.log(task.endTaskStatus);
    task.endTaskStatus = true;
    this.taskService.updateTask(task).subscribe(data => { if (data) {
      this.router.navigateByUrl('/view');
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
      this.project = result;
      if(result!=null){
      this.searchProjectTerm=this.project.projectName;
      }
    });
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
  ngOnInit() {

    this.taskService.getTask().subscribe
    (
      {
        next: tasks => this.tasksList = tasks,
        error: err => this.errorMessage = err
      });
      this.taskService.getProjects().subscribe
    (
      {
        next: projects => this.projectList = projects,
        error: err => this.errorMessage = err
      });
  }
  sortByStartDate()
  {
    this.tasksList.sort(sortByStartDate);
  }
  sortByEndDate()
  {
    this.tasksList.sort(sortByEndDate);
  }
  sortByPriority()
  {
    this.tasksList.sort(sortByPriority);
  }
  
}
function  sortByStartDate(s1 : Task, s2 : Task) 
  {
    if (s1.startDate > s2.startDate) return 1
    else if (s1.startDate === s2.endDate) return 0
    else return -1
  }
  function  sortByEndDate(s1 : Task, s2 : Task) 
  {
    if (s1.endDate > s2.endDate) return 1
    else if (s1.endDate === s2.endDate) return 0
    else return -1
  }
  function  sortByPriority(s1 : Task, s2 : Task) 
  {
    if (s1.priority > s2.priority) return 1
    else if (s1.priority === s2.priority) return 0
    else return -1
  }


