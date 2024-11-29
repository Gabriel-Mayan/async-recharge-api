import { CorsOptions } from 'cors';

const whitelist = [];
const origin = process.env.MODE !== 'production' ? true : whitelist;

export const corsConfig: CorsOptions = {
  credentials: true,
  origin,
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'OPTIONS'],
  allowedHeaders: [
    'Content-Type',
    'Authorization',
    'Date',
    'Origin',
    'Accept',
    'Cookie',
    'Set-Cookie',
    'X-XSRF-TOKEN',
    'Accept-Language',
  ],
};
