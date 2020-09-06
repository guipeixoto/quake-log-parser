interface IReturnDTO {
  killerPlayerName: string;
  deadPlayerName: string;
  weaponName: string;
}

export default class GetObjectsGameService {
  public run(line: string): IReturnDTO {
    return { killerPlayerName: '', deadPlayerName: '', weaponName: '' };
  }
}
