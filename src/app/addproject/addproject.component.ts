import { Component, OnInit } from '@angular/core';
import { TaskService } from '../taskservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Project } from '../interfaces/project';

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

  toggleVisibility(e){
    this.marked= e.target.checked;
    console.log(this.marked);
  }

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.project.priority=10;
  }

}
