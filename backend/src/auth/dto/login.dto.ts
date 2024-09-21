import { IsEmail, IsNotEmpty } from 'class-validator';

export class LoginDto {
    @IsEmail({}, { message: 'Please provide a valid email.' })
    @IsNotEmpty({ message: 'Email is required.' })
    email: string;
}
