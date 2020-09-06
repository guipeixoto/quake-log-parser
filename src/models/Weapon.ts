export default class Weapon {
  // Atributos da arma
  name: string;

  kills: number;

  constructor(name: string) {
    this.name = name;
    this.kills = 0;
  }
}
