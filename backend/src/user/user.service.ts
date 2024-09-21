import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly userRepository: Repository<User>,
  ) {}

  /**
   * This function is used to create a User in the User Entity.
   * @param createUserDto this is of type CreateUserDto
   * @returns promise of user
   *    */
  async createUser(createUserDto: CreateUserDto): Promise<User> {
    // Check if a user with the given email already exists
    const existingUser = await this.userRepository.findOneBy({
      email: createUserDto.email,
    });

    if (existingUser) {
      throw new HttpException(
        'User with this email already exists',
        HttpStatus.CONFLICT,
      );
    }

    // Create a new user if the email does not exist
    const user = new User();
    user.email = createUserDto.email;

    if (createUserDto.friends && createUserDto.friends.length > 0) {
      const friends = await this.userRepository.findByIds(
        createUserDto.friends,
      );
      user.friends = friends;
    }

    if (
      createUserDto.friendRequests &&
      createUserDto.friendRequests.length > 0
    ) {
      const friendRequests = await this.userRepository.findByIds(
        createUserDto.friendRequests,
      );
      user.friendRequests = friendRequests;
    }

    return this.userRepository.save(user);
  }

  /**
   * This function is used to get all users.
   * @returns promise of array of users
   */
  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }

  /**
   * This function is used to get data of the user whose id is passed in the parameter.
   * @param id is type of number, which represents the user id.
   * @returns promise of user
   */
  viewUser(id: number): Promise<User> {
    return this.userRepository.findOneBy({ id });
  }

  /**
   * This function is used to update a specific user whose id is passed in the parameter along with updated data.
   * @param id is type of number, which represents the user id.
   * @param updateUserDto this is partial type of CreateUserDto.
   * @returns promise of updated user
   */
  async updateUser(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.userRepository.findOneBy({ id });

    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    user.email = updateUserDto.email || user.email;

    if (updateUserDto.friends && updateUserDto.friends.length > 0) {
      const friends = await this.userRepository.findByIds(
        updateUserDto.friends,
      );
      user.friends = friends;
    }

    if (
      updateUserDto.friendRequests &&
      updateUserDto.friendRequests.length > 0
    ) {
      const friendRequests = await this.userRepository.findByIds(
        updateUserDto.friendRequests,
      );
      user.friendRequests = friendRequests;
    }

    return this.userRepository.save(user);
  }

  /**
   * This function is used to remove or delete a user from the database.
   * @param id is the type of number, which represents the user id
   * @returns number of rows deleted or affected
   */
  removeUser(id: number): Promise<{ affected?: number }> {
    return this.userRepository.delete(id);
  }
}
