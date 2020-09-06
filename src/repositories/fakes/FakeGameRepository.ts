import Game from '@models/Game';
import IGameRepository from '@repositories/contracts/IGameRepository';
import IGameFilters from 'dtos/IGameFilters';

export default class FakeGameRepository implements IGameRepository {
  private games: Game[] = [];

  constructor() {
    const game1: Game = {
      id: 1,
      total_kills: 0,
      players: [],
      weapons: [],
    };

    const game2: Game = {
      id: 2,
      total_kills: 11,
      players: [
        {
          name: 'Isgalamido',
          kills: -8,
        },
        {
          name: 'Mocinha',
          kills: 0,
        },
      ],
      weapons: [
        {
          name: 'MOD_TRIGGER_HURT',
          kills: 7,
        },
        {
          name: 'MOD_ROCKET_SPLASH',
          kills: 3,
        },
        {
          name: 'MOD_FALLING',
          kills: 1,
        },
      ],
    };

    const game3: Game = {
      id: 7,
      total_kills: 130,
      players: [
        {
          name: 'Zeh',
          kills: -5,
        },
        {
          name: 'Dono da Bola',
          kills: -2,
        },
        {
          name: 'Assasinu Credi',
          kills: 1,
        },
        {
          name: 'Oootsimo',
          kills: -4,
        },
        {
          name: 'Isgalamido',
          kills: -4,
        },
        {
          name: 'Mal',
          kills: -12,
        },
        {
          name: 'Chessus',
          kills: 0,
        },
      ],
      weapons: [
        {
          name: 'MOD_FALLING',
          kills: 7,
        },
        {
          name: 'MOD_TRIGGER_HURT',
          kills: 20,
        },
        {
          name: 'MOD_ROCKET_SPLASH',
          kills: 49,
        },
        {
          name: 'MOD_ROCKET',
          kills: 29,
        },
        {
          name: 'MOD_SHOTGUN',
          kills: 7,
        },
        {
          name: 'MOD_RAILGUN',
          kills: 9,
        },
        {
          name: 'MOD_MACHINEGUN',
          kills: 9,
        },
      ],
    };

    const game4: Game = {
      id: 14,
      total_kills: 122,
      players: [
        {
          name: 'Isgalamido',
          kills: -2,
        },
        {
          name: 'Zeh',
          kills: -7,
        },
        {
          name: 'Chessus',
          kills: -2,
        },
        {
          name: 'Dono da Bola',
          kills: -7,
        },
        {
          name: 'Mal',
          kills: -8,
        },
        {
          name: 'Oootsimo',
          kills: -3,
        },
        {
          name: 'Assasinu Credi',
          kills: -4,
        },
        {
          name: 'Assasinu Credi',
          kills: 0,
        },
      ],
      weapons: [
        {
          name: 'MOD_RAILGUN',
          kills: 20,
        },
        {
          name: 'MOD_TRIGGER_HURT',
          kills: 31,
        },
        {
          name: 'MOD_ROCKET',
          kills: 23,
        },
        {
          name: 'MOD_ROCKET_SPLASH',
          kills: 24,
        },
        {
          name: 'MOD_MACHINEGUN',
          kills: 4,
        },
        {
          name: 'MOD_BFG_SPLASH',
          kills: 10,
        },
        {
          name: 'MOD_FALLING',
          kills: 5,
        },
        {
          name: 'MOD_BFG',
          kills: 5,
        },
      ],
    };

    const game5: Game = {
      id: 19,
      total_kills: 95,
      players: [
        {
          name: 'Mal',
          kills: -6,
        },
        {
          name: 'Zeh',
          kills: 0,
        },
        {
          name: 'Dono da Bola',
          kills: -1,
        },
        {
          name: 'Isgalamido',
          kills: 0,
        },
        {
          name: 'Assasinu Credi',
          kills: -3,
        },
        {
          name: 'Oootsimo',
          kills: 0,
        },
      ],
      weapons: [
        {
          name: 'MOD_TRIGGER_HURT',
          kills: 12,
        },
        {
          name: 'MOD_ROCKET',
          kills: 27,
        },
        {
          name: 'MOD_ROCKET_SPLASH',
          kills: 32,
        },
        {
          name: 'MOD_SHOTGUN',
          kills: 6,
        },
        {
          name: 'MOD_RAILGUN',
          kills: 10,
        },
        {
          name: 'MOD_MACHINEGUN',
          kills: 7,
        },
        {
          name: 'MOD_FALLING',
          kills: 1,
        },
      ],
    };

    this.games.push(game1);
    this.games.push(game2);
    this.games.push(game3);
    this.games.push(game4);
    this.games.push(game5);
  }

  public async find({
    player_name,
    weapon_name,
  }: IGameFilters): Promise<Game[]> {
    if (player_name && player_name !== 'undefined') {
      this.games = this.games.filter(game =>
        game.players.some(player =>
          player.name.toLowerCase().includes(player_name.toLowerCase()),
        ),
      );
    }

    if (weapon_name && weapon_name !== 'undefined') {
      this.games = this.games.filter(game =>
        game.weapons.some(weapon =>
          weapon.name.toLowerCase().includes(weapon_name.toLowerCase()),
        ),
      );
    }

    return this.games;
  }

  public async findOne(id: number): Promise<Game | undefined> {
    return this.games.find(game => game.id === id);
  }
}
