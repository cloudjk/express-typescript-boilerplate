import dotenv from 'dotenv';

dotenv.config();

type Config = 'NODE_ENV' | 'PORT' | 'DB_HOST' | 'DB_USER' | 'DB_PASS';

export const config: Record<Config, string> = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || '8000',
  DB_HOST: process.env.DB_HOST,
  DB_USER: process.env.DB_USER,
  DB_PASS: process.env.DB_PASS,
};
