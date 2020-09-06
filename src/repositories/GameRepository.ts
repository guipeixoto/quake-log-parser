import fileConfig from '@config/file';

import Game from '@models/Game';
import GameLogParserService from '@services/GameLogParserService';
import IGameRepository from './contracts/IGameRepository';
import IGamePlayerRepository from './contracts/IGamePlayerRepository';
import IGameWeaponRepository from './contracts/IGameWeaponRepository';

export default class GameRepository implements IGameRepository {
  constructor(
    private gamePlayerRepository: IGamePlayerRepository,
    private gameWeaponRepository: IGameWeaponRepository,
  ) {}

  public async find(): Promise<Game[]> {
    const gameLogParserService = new GameLogParserService(
      this.gamePlayerRepository,
      this.gameWeaponRepository,
    );

    return gameLogParserService.run(
      `${fileConfig.filePath}\\${fileConfig.fileName}`,
    );
  }

  public async findOne(id: number): Promise<Game | undefined> {
    const gameLogParserService = new GameLogParserService(
      this.gamePlayerRepository,
      this.gameWeaponRepository,
    );

    const games = await gameLogParserService.run(
      `${fileConfig.filePath}\\${fileConfig.fileName}`,
    );

    return games.find(game => game.id === id);
  }
}
