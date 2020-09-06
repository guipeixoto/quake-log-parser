import Game from '@models/Game';
import IGameRepository from '@repositories/contracts/IGameRepository';

export default class GetGameByIdService {
  constructor(private gameRepository: IGameRepository) {}

  public async run(id: number): Promise<Game | undefined> {
    return this.gameRepository.findOne(id);
  }
}
