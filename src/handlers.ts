import { Request, Response } from 'express';

const helloBuilder = (name: string) => ({ hello: name });

export const rootHandler = (_req: Request, res: Response) => {
  res.send(`API is working 🚀: ${process.env.DB_USER}`);
};

export const helloHandler = (req: Request, res: Response) => {
  const { params } = req;
  const { name } = params;
  const response = helloBuilder(name);

  return res.json(response);
};
