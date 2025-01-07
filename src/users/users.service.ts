import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from './dto/createUserDto';

export interface User {
    name: string;
    phone: string;
}

@Injectable()
export class UsersService {

    private users: User[] = [
        {
            name: "Jhon Doe",
            phone: "123431231231"
        },
        {
            name: "Jhon Doe Gonzalez",
            phone: "123431231231"
        }
    ]

    getUsers(): User[] {
        return structuredClone(this.users);
    }

    createUser(user: CreateUserDTO){
        return user;
    }

}
