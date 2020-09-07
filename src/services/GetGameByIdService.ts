import fs from 'fs';

import AppError from '@shared/errors/AppError';
import fileConfig from '@config/file';

import Game from '@models/Game';
import IGameRepository from '@repositories/contracts/IGameRepository';

export default class GetGameByIdService {
  constructor(private gameRepository: IGameRepository) {}

  public async run(id: number): Promise<Game | undefined> {
    if (!fs.existsSync(`${fileConfig.filePath}\\${fileConfig.fileName}`)) {
      throw new AppError('games.log file not found.', 404);
    }

    return this.gameRepository.findOne(id);
  }
}
