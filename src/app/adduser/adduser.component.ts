import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { User, IUser } from '../interfaces/user';
import { TaskService } from '../taskservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css']
})
export class AdduserComponent implements OnInit, OnChanges {


  ngOnChanges(changes: SimpleChanges): void {

    
  }

  user: User = new User();
  usersList : IUser[];
  errorMessage : string;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  addUser(user : User)
  {
    this.taskService.addUser(user).subscribe(data => { if (data) {
      this.refresh();
      }
    });
  
   
  }
refresh()
{
  this.taskService.getUser().subscribe
    (
      {
        next: users => this.usersList = users,
        error: err => this.errorMessage = err,
      });
}

  deleteUser(user : User)
  {
    this.taskService.deleteUser(user).subscribe(data => { if (data) {
      this.refresh();
      }
    });
  }

 

  ngOnInit() {
    this.taskService.getUser().subscribe
    (
      {
        next: users => this.usersList = users,
        error: err => this.errorMessage = err
      });
  }

}
