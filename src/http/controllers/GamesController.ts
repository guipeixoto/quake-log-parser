import { Request, Response } from 'express';

import ListGamesService from '@services/ListGamesService';
import GameRepository from '@repositories/GameRepository';
import GamePlayerRepository from '@repositories/GamePlayerRepository';
import GameWeaponRepository from '@repositories/GameWeaponRepository';
import GetGameByIdService from '@services/GetGameByIdService';

export default class GamesController {
  public async index(request: Request, response: Response): Promise<Response> {
    const gamePlayerRepository = new GamePlayerRepository();
    const gameWeaponRepository = new GameWeaponRepository();
    const gameRepository = new GameRepository(
      gamePlayerRepository,
      gameWeaponRepository,
    );
    const listGamesService = new ListGamesService(gameRepository);

    const games = await listGamesService.run();

    return response.json(games);
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const gamePlayerRepository = new GamePlayerRepository();
    const gameWeaponRepository = new GameWeaponRepository();
    const gameRepository = new GameRepository(
      gamePlayerRepository,
      gameWeaponRepository,
    );
    const getGameByIdService = new GetGameByIdService(gameRepository);

    const game = await getGameByIdService.run(Number(id));

    return response.json(game);
  }
}
