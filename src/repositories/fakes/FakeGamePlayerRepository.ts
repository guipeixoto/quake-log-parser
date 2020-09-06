import IGamePlayerRepository from '@repositories/contracts/IGamePlayerRepository';
import Player from '@models/Player';

export default class FakeGamePlayerRepository implements IGamePlayerRepository {
  public findIndex(playerName: string, players: Player[]): number {
    return players.findIndex(player => player.name === playerName);
  }

  public addOnGame(playerName: string, playersCurrentGame: Player[]): number {
    const player = new Player(playerName);

    return playersCurrentGame.push(player) - 1;
  }
}
