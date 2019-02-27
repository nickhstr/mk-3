import { createServer } from './server';
import { middleware } from './server/middleware';

createServer(middleware());
