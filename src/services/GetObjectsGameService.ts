interface IReturnDTO {
  killerPlayerName: string;
  deadPlayerName: string;
  weaponName: string;
}

export default class GetObjectsGameService {
  public run(line: string): IReturnDTO {
    const startKillerNameIndex = line.lastIndexOf(':');
    const killedWordIndex = line.lastIndexOf('killed');
    const byWordIndex = line.lastIndexOf('by');

    const killerPlayerName = line
      .substring(startKillerNameIndex + 1, killedWordIndex)
      .trim();

    const deadPlayerName = line
      .substring(killedWordIndex + 6, byWordIndex)
      .trim();

    const weaponName = line.substring(byWordIndex + 2, line.length).trim();

    return { killerPlayerName, deadPlayerName, weaponName };
  }
}
