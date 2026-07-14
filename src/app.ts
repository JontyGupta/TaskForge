import express from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import cookieParser from 'cookie-parser';
import { notFoundHandler } from './core/middleware/not-found.js';
import { errorHandler } from './core/middleware/error-handler.js';

import routes from './routes/index.js';

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());

app.use(cookieParser());

app.use(express.json());

app.use('/api/v1', routes);

app.use(notFoundHandler);

app.use(errorHandler);

export default app;