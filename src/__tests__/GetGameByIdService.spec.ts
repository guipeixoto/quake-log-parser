import GetGameByIdService from '@services/GetGameByIdService';
import FakeGameRepository from '@repositories/fakes/FakeGameRepository';

let fakeGameRepository: FakeGameRepository;

let getGameByIdService: GetGameByIdService;

describe('GetGameById', () => {
  beforeEach(() => {
    fakeGameRepository = new FakeGameRepository();

    getGameByIdService = new GetGameByIdService(fakeGameRepository);
  });

  it('should be able to show game by id', async () => {
    const game = await getGameByIdService.run(1);

    expect(game).toBeInstanceOf(Object);
    expect(game).toHaveProperty('id');
    expect(game).toHaveProperty('total_kills');
    expect(game).toHaveProperty('players');
    expect(game).toHaveProperty('weapons');

    expect(game?.players).toBeInstanceOf(Array);
    expect(game?.weapons).toBeInstanceOf(Array);
  });

  it('should not be able to show game by id as it was not found', async () => {
    const game = await getGameByIdService.run(99);

    expect(game).toBe(undefined);
  });
});
