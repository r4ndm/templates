import * as Logger from 'bunyan';
import { ExpressFactory } from './express.factory';

const logger = Logger.createLogger({ name: 'applogger' });
const app = new ExpressFactory(logger);

app.startServer();
