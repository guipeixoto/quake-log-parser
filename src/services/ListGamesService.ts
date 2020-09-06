import fs from 'fs';

import AppError from '@shared/errors/AppError';
import fileConfig from '@config/file';

import IGameFilters from 'dtos/IGameFilters';
import IGameRepository from '@repositories/contracts/IGameRepository';

import Game from '@models/Game';

export default class ListGamesService {
  constructor(private gameRepository: IGameRepository) {}

  public async run({
    player_name,
    weapon_name,
  }: IGameFilters): Promise<Game[]> {
    if (!fs.existsSync(`${fileConfig.filePath}\\${fileConfig.fileName}`)) {
      throw new AppError('games.log file not found.', 404);
    }

    const games = await this.gameRepository.find({ player_name, weapon_name });

    return games;
  }
}
