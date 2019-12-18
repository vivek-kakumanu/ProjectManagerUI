export interface ParentTask
{
    parentId : number;
    parentTask : String;
}

export class IParentTask implements ParentTask
{
    parentId: number;    
    parentTask: String;

    constructor(parentId : number , parentTask : String)
    {
        this.parentId=parentId;
        this.parentTask=parentTask;
    }
}
