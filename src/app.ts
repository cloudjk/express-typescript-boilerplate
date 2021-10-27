import cors from 'cors';
import express from 'express';
import helmet from 'helmet';
import morgan from 'morgan';
import accessLogStream from './middlewares/morgan';
import routes from './routes';
import { RegisterRoutes } from '../dist/routes';

export const app = express();

// secure your HTTP headers
app.use(helmet());

// cross origin resource sharing
app.use(cors());

// http request logger middleware
app.use(morgan('combined', { stream: accessLogStream }));

// Use body parser to read sent json payloads
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// static files
app.use(express.static('public'));

// routes
app.use('/', routes);

// swagger for OAS3
RegisterRoutes(app);
