import dotenv from 'dotenv';

dotenv.config();

type Config = 'NODE_ENV' | 'PORT';

export const config: Record<Config, string> = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: process.env.PORT || '8000',
};
