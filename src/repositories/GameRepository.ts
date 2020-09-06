import fileConfig from '@config/file';

import Game from '@models/Game';
import IGameFilters from 'dtos/IGameFilters';
import GameLogParserService from '@services/GameLogParserService';
import IGameRepository from './contracts/IGameRepository';
import IGamePlayerRepository from './contracts/IGamePlayerRepository';
import IGameWeaponRepository from './contracts/IGameWeaponRepository';

export default class GameRepository implements IGameRepository {
  constructor(
    private gamePlayerRepository: IGamePlayerRepository,
    private gameWeaponRepository: IGameWeaponRepository,
  ) {}

  public async find({
    player_name,
    weapon_name,
  }: IGameFilters): Promise<Game[]> {
    const gameLogParserService = new GameLogParserService(
      this.gamePlayerRepository,
      this.gameWeaponRepository,
    );

    let games = await gameLogParserService.run(
      `${fileConfig.filePath}\\${fileConfig.fileName}`,
    );

    if (player_name && player_name !== 'undefined') {
      games = games.filter(game =>
        game.players.some(player =>
          player.name.toLowerCase().includes(player_name.toLowerCase()),
        ),
      );
    }

    if (weapon_name && weapon_name !== 'undefined') {
      games = games.filter(game =>
        game.weapons.some(weapon =>
          weapon.name.toLowerCase().includes(weapon_name.toLowerCase()),
        ),
      );
    }

    return games;
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
