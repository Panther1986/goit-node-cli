import 'dotenv/config';

import { startServer } from './server.js';
import { initMongoDB } from './db/initMongoDB.js';

const bootstrap = async () => {
  try {
    await initMongoDB();
    startServer();
  } catch (error) {
    console.error('Bootstrap failed', error);
  }
};

bootstrap();
