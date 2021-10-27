import { app } from './app';
import { config } from './configs/config';

app.listen(config.PORT, () =>
  console.log(`Server is listening on http://localhost:${config.PORT}`),
);
