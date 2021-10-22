import { Router } from 'express';
import { mailController } from '../controllers/mailController';

const routes = Router();

routes.get('/hello/:name', mailController);

export default routes;
