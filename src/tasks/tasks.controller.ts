import { Body, Controller, Delete, Get, Param, Patch, Post, Put, Req, Res } from "@nestjs/common";
import { TasksService } from "./tasks.service";
import { Response } from "express";
import { Task, createTaskDTO, updateTaskDTO } from "./dto/task.interface";

@Controller('tasks')
export class TasksController{
    
    constructor(
        private tasksService: TasksService
    ){}

    @Get()
    getAllTasks(){
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTaskById(@Param('id') id: string, @Res() response: Response){

        const task = this.tasksService.getTaskById(id);
        response.status(200).json(task);

    }

    @Post()
    createTasks(@Body() taskSended: createTaskDTO , @Res() response: Response){

        const message: string = this.tasksService.createTask(taskSended);

        response.status(200).json({ message });
        
    }

    @Put('/:id')
    updateTask( @Body() task: updateTaskDTO, @Res() response: Response, @Param('id') id: string ){

        const taskUpdated = this.tasksService.updateTask( task, id );

        response.status(200).json( {
            task: taskUpdated
        });
        
    }

    @Delete()
    deleteTask(){
        return this.tasksService.deleteTask();
    }

    @Patch()
    updatePartialTask(){
        return this.tasksService.updatePartialTask();
    }

}