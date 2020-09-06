import IGameWeaponRepository from '@repositories/contracts/IGameWeaponRepository';
import Weapon from '@models/Weapon';

export default class GameWeaponRepository implements IGameWeaponRepository {
  public findIndex(weaponName: string, weapons: Weapon[]): number {
    return weapons.findIndex(weapon => weapon.name === weaponName);
  }

  public addOnGame(weaponName: string, weaponsCurrentGame: Weapon[]): number {
    const weapon = new Weapon(weaponName);

    return weaponsCurrentGame.push(weapon) - 1;
  }
}
