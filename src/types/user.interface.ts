export interface IGeo {
  lat: string;
  lng: string;
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}
export interface ICompany {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface IUser {
  userId?: number;
  id: number;
  title?: string;
  body?: string;
  name: string;
  username?: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}

// A post request should not contain an id.
export type UserCreationParams = Pick<IUser, 'userId' | 'title' | 'body'>;

// Add required classes using union types
export type ValidationClasses = UserCreationParams;
