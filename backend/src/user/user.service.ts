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

    return this.userRepository.save(user);
  }

  /**
   * This function is used to get all users.
   * @returns promise of array of users
   */
  findAllUser(): Promise<User[]> {
    return this.userRepository.find();
  }
  // Method to find a user by ID
  findById(id: number): Promise<User | null> {
    return this.userRepository.findOneBy({ id });
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

  // Method to send a friend request
  async sendFriendRequest(currentUserId: number, targetUserId: number) {
    const currentUser = await this.findById(currentUserId);
    const targetUser = await this.findById(targetUserId);

    if (!targetUser) {
      throw new Error('Target user does not exist.');
    }

    if (!currentUser.friendRequests) {
      currentUser.friendRequests = [];
    }

    // Add the target user's ID to the current user's friendRequests
    currentUser.friendRequests.push(targetUserId);

    // Save the updated user
    await this.userRepository.save(currentUser);

    return { message: 'Friend request sent successfully.' };
  }
}
