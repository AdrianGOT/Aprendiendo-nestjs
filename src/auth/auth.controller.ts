import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, UseGuards } from '@nestjs/common';
import { ValidateUserPipe } from './pipes/validate-user/validate-user.pipe';
import { AuthGuardGuard } from './guard/auth-guard/auth-guard.guard';

@Controller('auth')
export class AuthController {

    @Get('')
    @HttpCode(201)
    somethingNew(){
        return 'something new';
    }

    @Get('/ticket/:num')
    sumOfNumbers( @Param("num", ParseIntPipe) num: number){
        return num + 10;
    }

    @Get('active/:status')
    @UseGuards(AuthGuardGuard)
    isUserActive( @Param('status', ParseBoolPipe) status: boolean){
        console.log(status);
        console.log(typeof status)
        return status;
    }

    @Get('greet')
    // @UseGuards(AuthGuardGuard)
    greet(@Query(ValidateUserPipe) query: {name: string, age: number} ){
        // console.log(query);
        // console.log(typeof query);
        // console.log(typeof query.age);
        // console.log(typeof query.name);
        return `Hello ${query.name} with age of ${query.age}`;
        

    }
}
