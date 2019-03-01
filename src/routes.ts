import { Router } from 'express';
import { routes as TimeAPI } from './time/time.api';

// This acts as a route module where new main routes can be added and each subroutes can modularized in each api layers

export const routes = Router();
routes.use('/time', TimeAPI);