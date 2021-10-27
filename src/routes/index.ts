import { Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { mailController } from '../controllers/mailController';
// import swaggerDocument from '../docs/swagger.json';

const router = Router();

router.use('/docs', swaggerUi.serve, async (req: Request, res: Response) =>
  res.send(swaggerUi.generateHTML(await import('../../dist/swagger.json'))),
);

router.get('/hello/:name', mailController);

export default router;
