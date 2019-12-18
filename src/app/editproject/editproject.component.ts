import { Component, OnInit } from '@angular/core';
import { TaskService } from '../taskservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IProject, Project } from '../interfaces/project';

@Component({
  selector: 'app-editproject',
  templateUrl: './editproject.component.html',
  styleUrls: ['./editproject.component.css']
})
export class EditprojectComponent implements OnInit {
  id: number;
  project: Project=new Project();

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }


  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.taskService.getProjectById(this.id).subscribe
    ( data => {this.project = data; });
  }
  updateproject(project:Project)
  {
    this.taskService.updateProject(project).subscribe(data => { if (data) {
      this.router.navigateByUrl("/project");
      }
    });
  }
  viewProject()
  {
    this.router.navigateByUrl("/project");
  }

}