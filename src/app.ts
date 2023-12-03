import * as express from 'express';
import * as dotenv from 'dotenv';

import { appSetup } from './startup/init';
import { securitySetup } from './startup/security';
import { routerSetup } from './startup/router';

dotenv.config();

const app = express();

securitySetup(app);
routerSetup(app);
appSetup(app);