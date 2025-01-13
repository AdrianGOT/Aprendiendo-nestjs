import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuardGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    
    const request = context.switchToHttp().getRequest() as Request;
    console.log(request.url);
    // console.log(request.);
    console.log(request.headers)
    if(request.headers['authorization']){

      return true;
    }

    
    if(request.url === 'greet') return true;

    return false;
  }
}
