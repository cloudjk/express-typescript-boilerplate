import { Request, Response } from 'express';
import { mailService } from '../services/mailService';

export const mailController = (req: Request, res: Response) => {
  const { params } = req;
  const { name } = params;
  const response = mailService(name);

  return res.json(response);
};
