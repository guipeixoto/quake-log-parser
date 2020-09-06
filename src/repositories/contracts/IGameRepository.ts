import Game from '@models/Game';
import IGameFilters from 'dtos/IGameFilters';

export default interface IGameRepository {
  find(data: IGameFilters): Promise<Game[]>;
  findOne(id: number): Promise<Game | undefined>;
}
