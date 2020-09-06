import Game from '@models/Game';

export default interface IGameRepository {
  find(): Promise<Game[]>;
  findOne(id: number): Promise<Game | undefined>;
}
