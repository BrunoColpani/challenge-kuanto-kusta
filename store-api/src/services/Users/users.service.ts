import {
  ConflictException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Repository } from 'typeorm';
import { Users } from 'src/entities/Users/user.entity';
import { comparePassword, generateHash } from 'src/utils/password.utils';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY')
    private readonly _usersReposytory: Repository<Users>,
  ) {}

  async findAll() {
    return await this._usersReposytory.find();
  }

  async findOne(id: number) {
    const user = await this._usersReposytory.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User ID ${id} not found`);
    }

    return user;
  }

  async findByEmail(email: string) {
    const user = await this._usersReposytory.findOne({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException(`User email ${email} not found`);
    }

    return user;
  }

  async create(createUserDto: CreateUserDto) {
    try {
      await this._verifyUserEmailExists(createUserDto.email);
      const passowrdHash = await generateHash(createUserDto.password);

      const user = this._usersReposytory.create({
        ...createUserDto,
        password: passowrdHash,
      });

      return await this._usersReposytory.save(user);
    } catch (error) {
      return error.response;
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const oldUser = await this.findOne(id);

    if (oldUser.email !== updateUserDto.email) {
      await this._verifyUserEmailExists(updateUserDto.email);
    }

    let passowrdHash = oldUser.password;
    if (updateUserDto.password) {
      passowrdHash = await generateHash(updateUserDto.password);
    }

    const user = await this._usersReposytory.preload({
      id,
      ...updateUserDto,
      password: passowrdHash,
    });

    if (!user) {
      throw new NotFoundException(`User ID ${id} not found`);
    }

    return this._usersReposytory.save(user);
  }

  async remove(id: number) {
    const user = await this._usersReposytory.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(`User ID ${id} not found`);
    }

    return this._usersReposytory.remove(user);
  }

  private async _verifyUserEmailExists(email: string) {
    const user = await this._usersReposytory.findOne({
      where: { email },
    });

    if (user) {
      throw new ConflictException(
        'There is already a user registered with this email.',
      );
    }
  }

  async validateUser(
    email: string,
    password: string,
  ): Promise<Users | undefined> {
    const user = await this._usersReposytory.findOne({ where: { email } });
    if (user && comparePassword(password, user.password)) {
      return { ...user, password: undefined };
    }
    return undefined;
  }
}
