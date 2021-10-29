import { UserCreationParams } from '../types/user.interface';
import { UsersService } from './usersService';

describe('User Service', () => {
  let userService: UsersService;
  const id = 1;
  const userCreationParams: UserCreationParams = {
    userId: 1,
    title: 'title',
    body: 'body',
  };

  beforeAll(() => {
    userService = new UsersService();
  });

  it('Should be defined', () => {
    expect(userService.get(id)).toBeDefined();
    expect(userService.create(userCreationParams)).toBeDefined();
  });

  it('Should check if return values of get method are valid', async () => {
    await expect(userService.get(id)).resolves.not.toBeFalsy();
    await expect(userService.get(id)).resolves.toHaveProperty('id');
    await expect(userService.get(id)).resolves.toHaveProperty('name');
    await expect(userService.get(id)).resolves.toHaveProperty('username');
    await expect(userService.get(id)).resolves.toHaveProperty('email');
    await expect(userService.get(id)).resolves.toHaveProperty('address');
    await expect(userService.get(id)).resolves.toHaveProperty('phone');
    await expect(userService.get(id)).resolves.toHaveProperty('website');
    await expect(userService.get(id)).resolves.toHaveProperty('company');
  });

  it('Should check if return values of create method are valid', async () => {
    await expect(userService.create(userCreationParams)).resolves.not.toBeFalsy();
    await expect(userService.create(userCreationParams)).resolves.toHaveProperty('userId');
    await expect(userService.create(userCreationParams)).resolves.toHaveProperty('title');
    await expect(userService.create(userCreationParams)).resolves.toHaveProperty('body');
  });
});
