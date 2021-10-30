import { format, createLogger, transports } from 'winston';
import DailyRotateFile from 'winston-daily-rotate-file';
import appRootPath from 'app-root-path';
import moment from 'moment-timezone';
import { config } from '../configs';

const logFormat = format.combine(
  format.colorize(),
  format.timestamp(),
  format.align(),
  format.printf(
    (info) => `${moment().tz('Australia/Sydney').format('YYYY-MM-DD hh:mm:ss A')} ${info.level}: ${info.message}`,
  ),
);

const getLevel = () => {
  let level = '';
  switch (config.NODE_ENV) {
    case 'development':
      level = 'info';
      break;
    case 'staging':
      level = 'warn';
      break;
    case 'production':
      level = 'error';
      break;
    default:
      level = 'info';
      break;
  }
  return level;
};

const transport = new DailyRotateFile({
  filename: 'application-%DATE%.log',
  dirname: `${appRootPath}/logs/`,
  level: getLevel(),
  handleExceptions: true,
  json: false,
  zippedArchive: true,
  maxSize: '20m',
  maxFiles: '14d',
});

const logger = createLogger({
  format: logFormat,
  transports: [transport, new transports.Console({ level: getLevel() })],
});

export default logger;
