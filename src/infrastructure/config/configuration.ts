import { config } from 'dotenv';
config();

export const configs = {
  mongoUrl: process.env.DATABASE_URL
}
