import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './configs/config';
import routes from './routes';

const app = express();

app.use(helmet());

app.use(cors());

// body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', routes);

app.listen(config.PORT, () =>
  console.log(`Server is listening on ${config.PORT}`),
);
