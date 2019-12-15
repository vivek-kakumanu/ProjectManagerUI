import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { TaskService } from '../taskservice.service';
import { ITask, Task } from '../interfaces/task';
import { ActivatedRoute, Router } from '@angular/router';
import { IParentTask, ParentTask } from '../interfaces/parentTask';

@Component({
  selector: 'app-edittask',
  templateUrl: './edittask.component.html',
  styleUrls: ['./edittask.component.css']
})
export class EdittaskComponent implements OnInit {
  id: number;
  

  task: Task = new Task(); 

 parent : IParentTask = this.task.parentTask;
  submitstatus: boolean =false;

  

  constructor(private taskService : TaskService , private route: ActivatedRoute, private router: Router) { 
  }

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.taskService.getTaskById(this.id).subscribe
    ( data => {this.task = data; });
  }

  updateTask(task : Task)
  {
    this.taskService.updateTask(task).subscribe(data => { if (data) {
      this.submitstatus = true;
      this.router.navigateByUrl('/view');
      }
    });
  }

  cancel()
  {
    this.router.navigateByUrl('/view'); 
  }

}
