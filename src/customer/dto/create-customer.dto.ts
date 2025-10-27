import { IsInt, IsString } from 'class-validator';

// *dto means data transfer object it does validation of the data
export class CreateCustomerDto {
  @IsString()
  name: string;
  @IsInt()
  age: number;
}
