import { Task } from './task';

export class Project implements IProject
{
    projectId:number;
    projectName:String; 
    startDate:Date;
    endDate:Date;
    priority:number;
}

export interface IProject
{
    projectId:number;
    projectName:String;
    startDate:Date;
    endDate:Date;
    priority:number;
}