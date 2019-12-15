import { Component, OnInit } from '@angular/core';
import { TaskService } from '../taskservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../interfaces/user';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  id:number;
  user : User;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });
    this.taskService.getUserById(this.id).subscribe
    ( data => {this.user = data; });
  }

  viewUser()
  {
    this.router.navigateByUrl("/adduser");
  }

  editUser(user : User)
  {
    this.taskService.updateUser(user).subscribe(data => { if (data) {
      this.router.navigateByUrl("/adduser");
      }
    });
  }

}
