import { PrismaClient } from '../generated/prisma/client.js';
import dotenv from 'dotenv';
import path from 'path';
import dotenvExpand from 'dotenv-expand';

const env = process.env.NODE_ENV || 'development';
dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) });
dotenvExpand.expand(
  env
    ? dotenv.config({ path: path.resolve(process.cwd(), `.env.${env}`) })
    : {},
);

const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
  errorFormat: 'minimal',
  datasources: {
    db: {
      url: process.env.DATABASE_URL,
    },
  },
});

export default prisma;
