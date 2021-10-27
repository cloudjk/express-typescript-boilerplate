import appRootPath from 'app-root-path';
import path from 'path';
import * as rfs from 'rotating-file-stream';

// create a rotating write stream for http request
const accessLogStream = rfs.createStream('access.log', {
  interval: '1d', // rotate daily
  path: path.join(`${appRootPath}`, 'logs'),
});

export default accessLogStream;
