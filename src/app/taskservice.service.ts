import { Injectable } from '@angular/core';
import{ITask, Task} from './interfaces/task';
import{HttpClient, HttpErrorResponse} from '@angular/common/http';
import{Observable, throwError} from 'rxjs';
import{catchError, tap, map} from 'rxjs/operators';
import { IUser, User } from './interfaces/user';
import { IProject } from './interfaces/project';
import { IParentTask } from './interfaces/parentTask';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
 
  private productUrl = 'http://localhost:8080/taskmanagementservice'

  constructor(private http :HttpClient) { }

  getTask() : Observable<ITask[]>
  {
    return this.http.get<ITask[]>(this.productUrl + '/tasks').pipe(map(data => data)); 
  }

  getParentTask() : Observable<IParentTask[]>
  {
    return this.http.get<IParentTask[]>(this.productUrl + '/parentTasks').pipe(map(data => data)); 
  }

  getUser() : Observable<IUser[]>
  {
    return this.http.get<IUser[]>(this.productUrl + '/users').pipe(map(data => data)); 
  }
  getProjects() : Observable<IProject[]>
  {
    return this.http.get<IProject[]>(this.productUrl + '/projects').pipe(map(data => data)); 
  }

  private handleError(error: any) {
    console.log(error);
    return throwError(error);
  }

  // Adding new task
  addTask(task: Task): Observable<ITask> {
    return this.http.post<ITask>(this.productUrl + '/addtask', task ).pipe( map(() => task), catchError(this.handleError));
  }

  // Adding new task
  deleteUser(user: User): Observable<IUser> {
    return this.http.put<IUser>(this.productUrl + '/deleteUser', user ).pipe( map(() => user), catchError(this.handleError));
  }

  // Adding new User
  addUser(user: User): Observable<IUser> {
    return this.http.put<IUser>(this.productUrl + '/addUser', user ).pipe( map(() => user), catchError(this.handleError));
  }

   // Get a task based on task id
   getTaskById(id: number): Observable<ITask> {
    return this.http.get<ITask>(this.productUrl + '/task/'+id).pipe(map((data => data), catchError(this.handleError)));
    }
    getUserById(id: number): Observable<IUser> {
      return this.http.get<IUser>(this.productUrl + '/user/'+id).pipe(map((data => data), catchError(this.handleError)));
    }

     // Adding new task
   updateTask(task: Task): Observable<ITask> {
    return this.http.put<ITask>(this.productUrl + '/updatetask', task ).pipe( map(() => task), catchError(this.handleError));
  }

  updateUser(user: User) : Observable<IUser> {
    return this.http.put<IUser>(this.productUrl + '/updateUser', user ).pipe( map(() => user), catchError(this.handleError));
  }

}
