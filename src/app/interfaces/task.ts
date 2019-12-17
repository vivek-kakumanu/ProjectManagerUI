import { ParentTask, IParentTask } from './parentTask';
import { Project } from './project';

export class Task implements ITask {

  taskId : number;
  project : Project;
  parentTask : IParentTask;
  taskName : string;
  priority : number;
  startDate : string;
  endDate : string;
  endTaskStatus : boolean


}

export interface ITask {

  taskId : number;
  project : Project;
  parentTask : IParentTask;
  taskName : string;
  priority : number;
  startDate : string;
  endDate : string;
  endTaskStatus : boolean
}