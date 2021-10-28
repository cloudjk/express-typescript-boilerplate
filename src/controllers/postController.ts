import { Body, Controller, Post, Route, SuccessResponse } from 'tsoa';
import { StatusCodes } from 'http-status-codes';
import { UsersService } from '../services/usersService';
import { IUser, UserCreationParams } from '../types/user.interface';
import logger from '../utils/logger';

@Route('posts')
export class PostController extends Controller {
  @SuccessResponse(StatusCodes.CREATED, 'Created') // Custom success response
  @Post()
  public async createUser(
    @Body() requestBody: UserCreationParams,
  ): Promise<IUser> {
    try {
      this.setStatus(StatusCodes.CREATED);
      const result = await new UsersService().create(requestBody);
      return result;
    } catch (err) {
      logger.error('err : ', err.message);
      this.setStatus(StatusCodes.BAD_REQUEST);
      return err;
    }
  }
}
