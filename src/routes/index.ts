import { Request, Response, Router } from 'express';
import swaggerUi from 'swagger-ui-express';

const router = Router();

router.use('/docs', swaggerUi.serve, async (req: Request, res: Response) =>
  res.send(swaggerUi.generateHTML(await import('../../dist/swagger.json'))),
);

export default router;
