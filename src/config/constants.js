import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
  path: path.join(process.cwd(), '.env'),
});

export const SERVER = {
  PORT: process.env.PORT,
};

export const EMAIL = {
  HOST: process.env.EMAIL_HOST,
  PORT: process.env.EMAIL_PORT,
  AUTH_USER: process.env.EMAIL_AUTH_USER,
  AUTH_PASS: process.env.EMAIL_AUTH_PASS,
};

export const SENTRY_URL = process.env.SENTRY_URL;
