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
  userfilter;

  constructor(private taskService: TaskService, private route: ActivatedRoute, private router: Router) { }

  addUser(user : User)
  {
    this.taskService.addUser(user).subscribe(data => { if (data) {
      this.refresh();
     this.user= new User();
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

  sortByFirstName()
  {
    this.usersList.sort(sortByFirstName);
  }
  sortByLastName()
  {
    this.usersList.sort(sortByLastName);
  }
  sortById()
  {
    this.usersList.sort(sortById);
  }
  
}

  function  sortByFirstName(s1 : User, s2 : User) 
  {
    if (s1.firstName > s2.firstName) return 1
    else if (s1.firstName === s2.firstName) return 0
    else return -1
  }
  function  sortByLastName(s1 : User, s2 : User) 
  {
    if (s1.lastName > s2.lastName) return 1
    else if (s1.lastName === s2.lastName) return 0
    else return -1
  }
  function  sortById(s1 : User, s2 : User) 
  {
    if (s1.userId > s2.userId) return 1
    else if (s1.userId === s2.userId) return 0
    else return -1
  }


