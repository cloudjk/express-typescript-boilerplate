import { validateOrReject } from 'class-validator';
import { ValidationClasses } from '../types/user.interface';

export const customValidateOrReject = async (input: ValidationClasses) => {
  try {
    await validateOrReject(input);
  } catch (errors) {
    console.log('Validation Failed. Errors: ', errors);
    throw errors;
  }
};
