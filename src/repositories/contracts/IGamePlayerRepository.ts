import Player from '@models/Player';

export default interface IGamePlayerRepository {
  findIndex(playerName: string, players: Player[]): number;
  addOnGame(playerName: string, playersCurrentGame: Player[]): number;
}
