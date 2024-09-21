/* eslint-disable prettier/prettier */
import { IsEmail, IsArray, IsOptional } from 'class-validator';

export class CreateUserDto {
    @IsEmail(null, { message: 'Please provide a valid Email.' })
    email: string;

    @IsArray({ message: 'Friends list must be an array of user IDs.' })
    @IsOptional()
    friends: number[]; // List of user IDs representing friends

    @IsArray({ message: 'Friend requests must be an array of user IDs.' })
    @IsOptional()
    friendRequests: number[]; // List of user IDs representing friend requests
}

