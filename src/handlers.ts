import { Request, Response } from 'express';

const helloBuilder = (name: string) => ({ hello: name });

export const rootHandler = (_req: Request, res: Response) =>
  res.send('API is working 🚀');

export const helloHandler = (req: Request, res: Response) => {
  const { params } = req;
  const { name = 'World' } = params;
  const response = helloBuilder(name);

  return res.json(response);
};
