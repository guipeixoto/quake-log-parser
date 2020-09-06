export default class Player {
  // Atributos do jogador
  name: string;

  kills: number;

  constructor(name: string) {
    this.name = name;
    this.kills = 0;
  }
}
