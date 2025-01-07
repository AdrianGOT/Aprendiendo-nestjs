import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { Task, createTaskDTO, Status, updateTaskDTO } from "./dto/task.interface";

@Injectable()
export class TasksService{
    private taskList: Task[] = []

    getTasks(){
      return this.taskList;
    }

    createTask(task: any){

        this.taskList.push({
            id: `${this.taskList.length + 1}`,
            titulo: task.titulo,
            status: Status.ACTIVO
        })
        
        const taskCreated = this.taskList[this.taskList.length - 1];

        return `the task created was '${taskCreated.id}'` 
    }

    getTaskById(id: string){
        const taskFound = this.taskList.find( task => task.id === id );
        
        if( !taskFound ) return new NotFoundException(`The task with id ${id} was not found`);
        
        return taskFound;
    }

    updateTask(task: updateTaskDTO, id: string){
        
        if(!Object.values( Status ).includes( task.status )) return new BadRequestException('The data intered is invalid'); 

        const taskIndexFound = this.taskList.findIndex(task => task.id === id);
        
        if(taskIndexFound < 0) return new NotFoundException( `The task with id ${id} was not found` );

        this.taskList[taskIndexFound] = {
            ...this.taskList[taskIndexFound],
            ...task,
        }

        return this.taskList[taskIndexFound];
    }

    deleteTask(){
        return 'Deleting task';
    }

    updatePartialTask(){
        return 'Update partialy a task';
    }
}