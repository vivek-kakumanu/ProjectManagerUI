import { ParentTask, IParentTask } from './parentTask';

export class Task implements ITask {

  taskId : number;
  parentTask : IParentTask;
  taskName : string;
  priority : number;
  startDate : string;
  endDate : string;
  endTaskStatus : boolean

}

export interface ITask {

  taskId : number;
  parentTask : IParentTask;
  taskName : string;
  priority : number;
  startDate : string;
  endDate : string;
  endTaskStatus : boolean

}