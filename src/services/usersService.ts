import axios from 'axios';
import { Post } from '../models/Post';
import { IUser, UserCreationParams } from '../types/user.interface';
import { customValidateOrReject } from '../utils/validator';

export class UsersService {
  public async get(id: number): Promise<IUser> {
    if (!id) throw Error('parameter id must exist');

    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    return response.data;
  }

  public async create(userCreationParams: UserCreationParams): Promise<IUser> {
    const { userId, title, body } = userCreationParams;

    const post = new Post();
    post.userId = userId;
    post.title = title;
    post.body = body;

    await customValidateOrReject(post);

    const response = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      userCreationParams,
    );

    return response.data;
  }
}
