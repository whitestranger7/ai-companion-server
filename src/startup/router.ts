import { Express } from 'express';
import { openaiRouter } from '../router/ai/router';

export const routerSetup = (app: Express) =>
  app.use(openaiRouter)
