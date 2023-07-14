import { Module } from '@nestjs/common';
import { UsersService } from '../../services/Users/users.service';
import { UsersController } from '../../controllers/Users/users.controller';
import { DatabaseModule } from 'src/database/database.module';
import { usersProviders } from 'src/entities/Users/user.providers';

@Module({
  imports: [DatabaseModule],
  controllers: [UsersController],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
