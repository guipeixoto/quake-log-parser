import Player from './Player';
import Weapon from './Weapon';

export default class Game {
  // Atributos do jogo
  id: number;

  total_kills: number;

  players: Player[];

  weapons: Weapon[];

  constructor(id: number) {
    this.id = id;
    this.total_kills = 0;
    this.players = [];
    this.weapons = [];
  }
}
