import GetObjectsGameService from '@services/GetObjectsGameService';

let getObjectsGameService: GetObjectsGameService;
const logLine = 'Kill: 3 4 10: Isgalamido killed Zeh by MOD_RAILGUN';

describe('GetObjectsGameService', () => {
  beforeEach(() => {
    getObjectsGameService = new GetObjectsGameService();
  });

  it('should be able to get name of the player killer, player dead and of the weapon by the log line', () => {
    const {
      killerPlayerName,
      deadPlayerName,
      weaponName,
    } = getObjectsGameService.run(logLine);

    expect(killerPlayerName).toEqual('Isgalamido');
    expect(deadPlayerName).toEqual('Zeh');
    expect(weaponName).toEqual('MOD_RAILGUN');
  });
});
