import path from 'path';

import FakeGamePlayerRepository from '@repositories/fakes/FakeGamePlayerRepository';
import FakeGameWeaponRepository from '@repositories/fakes/FakeGameWeaponRepository';
import GameLogParserService from '@services/GameLogParserService';

let fakeGamePlayerRepository: FakeGamePlayerRepository;
let fakeGameWeaponRepository: FakeGameWeaponRepository;

let gameLogParserService: GameLogParserService;

const filePath = path.resolve(__dirname, 'stub', 'games.mock.log');

describe('GetObjectsGameService', () => {
  beforeEach(() => {
    fakeGamePlayerRepository = new FakeGamePlayerRepository();
    fakeGameWeaponRepository = new FakeGameWeaponRepository();

    gameLogParserService = new GameLogParserService(
      fakeGamePlayerRepository,
      fakeGameWeaponRepository,
    );
  });

  it('should be able to parse file and return game list', async () => {
    const games = await gameLogParserService.run(filePath);

    expect(games).toBeInstanceOf(Array);
    expect(games[0].total_kills).toEqual(4);
    expect(games[0].players).toHaveLength(4);
    expect(games[0].weapons).toHaveLength(3);
    expect(games).toHaveLength(1);
  });
});
