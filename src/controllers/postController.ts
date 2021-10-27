import { Body, Controller, Path, Post, Route, SuccessResponse } from 'tsoa';
import { User } from '../models/user';
import { UserCreationParams, UsersService } from '../services/usersService';

@Route('posts')
export class PostController extends Controller {
  @SuccessResponse('201', 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<User> {
    // this.setStatus(201); // set return status 201
    return new UsersService().create(requestBody);
  }
}
