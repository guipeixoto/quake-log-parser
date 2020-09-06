import fs from 'fs';
import FakeGameRepository from '@repositories/fakes/FakeGameRepository';
import ListGamesService from '@services/ListGamesService';
import AppError from '@shared/errors/AppError';

let fakeGameRepository: FakeGameRepository;

let listGamesService: ListGamesService;

describe('ListGames', () => {
  beforeEach(() => {
    fakeGameRepository = new FakeGameRepository();

    listGamesService = new ListGamesService(fakeGameRepository);
  });

  it('should be able to list games', async () => {
    const games = await listGamesService.run();

    expect(games).toBeInstanceOf(Array);
    expect(games).toHaveLength(5);

    expect(games[0]).toHaveProperty('id');
    expect(games[0]).toHaveProperty('players');
    expect(games[0]).toHaveProperty('total_kills');
    expect(games[0]).toHaveProperty('weapons');

    expect(games[0].players).toBeInstanceOf(Array);
    expect(games[0].weapons).toBeInstanceOf(Array);
  });

  it("should be able to throw the error if it doesn't find the games.log file", async () => {
    jest.spyOn(fs, 'existsSync').mockImplementation(() => false);

    await expect(listGamesService.run()).rejects.toBeInstanceOf(AppError);
    await expect(listGamesService.run()).rejects.toEqual(
      new AppError('games.log file not found.', 404),
    );
  });
});
