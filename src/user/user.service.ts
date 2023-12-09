import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/createUser.dto";
import { UserInterface } from "./user.interface";
import { hash } from "bcrypt";

@Injectable()
export class UserService {
  private users: UserInterface[] = [];
  async createUser(createUserDto: CreateUserDto): Promise<UserInterface[]> {
    const saltOrRounds = 10;

    const passwordHashed: string = await hash(
      createUserDto.password,
      saltOrRounds,
    );

    const newUser: UserInterface = {
      ...createUserDto,
      id: this.users.length + 1,
      password: passwordHashed,
    };

    this.users.push(newUser);

    return this.users;
  }

  async getAllUser(): Promise<UserInterface[]> {
    return this.users;
  }
}
