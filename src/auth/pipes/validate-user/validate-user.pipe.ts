import { ArgumentMetadata, HttpException, HttpStatus, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateUserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    
    const { age} = value;
    const ageNumber = parseInt(age.toString(), 10);

    if(isNaN(ageNumber)) {
      throw new HttpException("The age must be a number", HttpStatus.BAD_REQUEST);
    }
    

    return { ...value, age: ageNumber };
  }
}
