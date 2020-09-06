import Weapon from '@models/Weapon';

export default interface IGameWeaponRepository {
  findIndex(weaponName: string, weapons: Weapon[]): number;
  addOnGame(weaponName: string, weaponsCurrentGame: Weapon[]): number;
}
