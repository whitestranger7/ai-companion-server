import { Express } from 'express';
import * as cors from 'cors';
import { json } from 'body-parser';

export const securitySetup = (app: Express) =>
  app.use(cors()).use(json());
