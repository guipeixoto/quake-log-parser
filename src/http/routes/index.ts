import { Router } from 'express';

import gameShowValidation from '@validations/GameShowValidation';
import gameIndexValidation from '@validations/GameIndexValidation';

import GamesController from '@controllers/GamesController';

const routes = Router();

const gamesController = new GamesController();

routes.get('/games', gameIndexValidation, gamesController.index);
routes.get('/games/:id', gameShowValidation, gamesController.show);

export default routes;
