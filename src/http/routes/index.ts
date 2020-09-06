import { Router } from 'express';

import GamesController from '@controllers/GamesController';

const routes = Router();

const gamesController = new GamesController();

routes.get('/games', gamesController.index);
routes.get('/games/:id', gamesController.show);

export default routes;
