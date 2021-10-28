import { Controller, Get, Path, Route } from 'tsoa';
import { IUser } from '../types/user.interface';
import { UsersService } from '../services/usersService';

@Route('users')
export class UsersController extends Controller {
  @Get('{userId}')
  public async getUser(@Path() userId: number): Promise<IUser> {
    return new UsersService().get(userId);
  }
}
