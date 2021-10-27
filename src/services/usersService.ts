import axios from 'axios';
import { User } from '../models/user';
import logger from '../utils/logger';

// A post request should not contain an id.
export type UserCreationParams = Pick<User, 'userId' | 'title' | 'body'>;

export class UsersService {
  public async get(id: number): Promise<User> {
    if (!id) throw Error('parameter id must exist');

    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${id}`,
      );
      return response.data;
    } catch (err) {
      logger.error(err);
      throw Error(err.message);
    }
  }

  public async create(userCreationParams: UserCreationParams): Promise<User> {
    const { userId, title, body } = userCreationParams;

    if (!userId && !title && !body) {
      throw Error('parameters in body are required');
    }

    try {
      const response = await axios.post(
        'https://jsonplaceholder.typicode.com/posts',
        userCreationParams,
      );
      return response.data;
    } catch (err) {
      logger.error(err);
      throw Error(err.message);
    }
  }
}
