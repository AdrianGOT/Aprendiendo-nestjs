import { IsEmail, IsNotEmpty, IsNumber, IsString, Max, Min } from "class-validator";

export class CreateUserDTO{
    
    @IsString()
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @IsString()
    @IsNotEmpty()
    password: string;

    @IsString()
    @IsNotEmpty()
    name: string;

    @IsNumber()
    @Max(100)
    @Min(10)
    age: number;
}