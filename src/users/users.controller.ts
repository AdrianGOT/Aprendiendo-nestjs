import { Body, Controller, Get, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { CreateUserDTO } from './dto/createUserDto';

@Controller('users')
export class UsersController {

    constructor(
        private usersService: UsersService
    ){}

    @Get('/')
    getAllUsers( @Req() request: Request, @Res() response: Response ){
        // return this.usersService.getUsers();
        response.status(200).json({
            message: 'Hello world'
        })
    }

    // @UsePipes( new ValidationPipe() )
    @Post()
    createUser(@Body() user: CreateUserDTO, @Res() response: Response){
        response.status(200).json({
            user: this.usersService.createUser(user)
        })
    }
}
