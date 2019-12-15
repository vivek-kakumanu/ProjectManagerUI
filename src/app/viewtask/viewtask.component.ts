import { Component, OnInit } from '@angular/core';
import { TaskService } from '../taskservice.service';
import { ITask, Task } from '../interfaces/task';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-viewtask',
  templateUrl: './viewtask.component.html',
  styleUrls: ['./viewtask.component.css'],
})
export class ViewtaskComponent implements OnInit {
 
pageTittle : string = "View Task"
tasksList : ITask[];
errorMessage : string;

_taskFilter;
parentTaskFilter;
priorityFrom;
priorityTo;
start_Date;
end_Date;

  get taskFilter(): string {
    return this._taskFilter;
  }
  set taskFilter(value: string) {
    this._taskFilter = value;
     }

     constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  endTask(task : Task)
  {
    console.log(task.endTaskStatus);
    task.endTaskStatus = true;
    this.taskService.updateTask(task).subscribe(data => { if (data) {
      this.router.navigateByUrl('/view');
      }
    });
  

  }

  ngOnInit() {

    this.taskService.getTask().subscribe
    (
      {
        next: tasks => this.tasksList = tasks,
        error: err => this.errorMessage = err
      });
  }
}
