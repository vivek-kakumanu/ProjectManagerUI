import { Task } from './task';
import { Project } from './project';

export class User implements IUser{

    userId:number;
    firstName:String;
    lastName: String;
    employeeId:number;
    project:Project;
    task:Task;
}

export interface IUser{

    userId:number;
    firstName:String;
    lastName: String;
    employeeId:number;
    project:Project;
    task:Task;
}

