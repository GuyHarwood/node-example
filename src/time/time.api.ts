import { Router } from 'express';
import { TimeController } from './time.controller';


export const routes = Router();

routes.get('/', TimeController.getCurrentTime);