import express from 'express';
import { config } from './config/config';
import { rootHandler, helloHandler } from './handlers';

const app = express();

const port = config.PORT;

app.get('/', rootHandler);
app.get('/hello/:name', helloHandler);

// eslint-disable-next-line no-console
app.listen(port, () => console.log(`Server is listening on ${port}`));
