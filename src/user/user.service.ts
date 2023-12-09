import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UserEntity } from "./userEntity";
import { hash } from "bcrypt";

@Injectable()
export class UserService {
  private users: UserEntity[] = [];
  async createUser(createUserDto: CreateUserDto): Promise<UserEntity[]> {
    const saltOrRounds = 10;

    const passwordHashed: string = await hash(
      createUserDto.password,
      saltOrRounds,
    );

    const newUser: UserEntity = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHashed,
    };

    this.users.push(newUser);

    return this.users;
  }

  async getAllUser(): Promise<UserEntity[]> {
    return this.users;
  }
}
