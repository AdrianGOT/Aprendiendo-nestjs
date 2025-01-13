import { Body, Controller, Get, Post, Req, Res, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { CreateUserDTO } from './dto/createUserDto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';

@Controller('users')
@ApiResponse({status: 403, description: 'Forbidden.'})
export class UsersController {

    constructor(
        private usersService: UsersService
    ){}


    @Get('/')
    @ApiOperation({summary: 'Get a hello world text!'})
    getAllUsers( @Req() request: Request, @Res() response: Response ){
        // return this.usersService.getUsers();
        response.status(200).json({
            message: 'Hello world'
        })
    }

    // @UsePipes( new ValidationPipe() )
    @Post()
    @ApiOperation({summary: 'Create a new us er'})
    createUser(@Body() user: CreateUserDTO, @Res() response: Response){
        response.status(200).json({
            user: this.usersService.createUser(user)
        })
    }
}
