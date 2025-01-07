import { IsString, MinLength } from "class-validator";

export enum Status {
ACTIVO = 'Activo',
INACTIVO = 'Inactivo',
PROGRESS = 'Progress'
}

export interface Task{
    id: string;
    titulo: string;
    status: Status;
}

export type createTaskDTO =  Omit<Task, 'id'> ;
export type updateTaskDTO = Partial< Omit<Task, 'id'> >;
