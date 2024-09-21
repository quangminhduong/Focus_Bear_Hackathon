/* eslint-disable prettier/prettier */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 40 })
  email: string;

  @ManyToMany(() => User, (user) => user.friends)
  @JoinTable({
    name: 'user_friends', // Join table for friends
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'friendId',
      referencedColumnName: 'id',
    },
  })
  friends: number[];

  @ManyToMany(() => User, (user) => user.friendRequests)
  @JoinTable({
    name: 'user_friend_requests', // Join table for friend requests
    joinColumn: {
      name: 'userId',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'friendRequestId',
      referencedColumnName: 'id',
    },
  })
  friendRequests: number[];
}
