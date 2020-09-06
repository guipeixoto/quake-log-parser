import lineReader from 'line-reader';
import sleep from 'await-sleep';

import IGamePlayerRepository from '@repositories/contracts/IGamePlayerRepository';
import IGameWeaponRepository from '@repositories/contracts/IGameWeaponRepository';

import Game from '@models/Game';
import GetObjectsGameService from './GetObjectsGameService';

export default class GameLogParserService {
  private games: Game[] = [];

  private gameNumber = 1;

  private currentGame: Game = {} as Game;

  private readingFile = true;

  constructor(
    private gamePlayerRepository: IGamePlayerRepository,
    private gameWeaponRepository: IGameWeaponRepository,
  ) {}

  public async run(filePath: string): Promise<Game[]> {
    const getObjectsGameService = new GetObjectsGameService();

    lineReader.eachLine(filePath, (line, isLast) => {
      if (line.includes('InitGame')) {
        if (this.gameNumber !== 1) {
          this.games.push(this.currentGame);
        }

        this.currentGame = new Game(this.gameNumber);
        this.gameNumber++;
      }

      if (line.includes('Kill')) {
        const {
          killerPlayerName,
          deadPlayerName,
          weaponName,
        } = getObjectsGameService.run(line);

        let killerPlayerIndex = this.gamePlayerRepository.findIndex(
          killerPlayerName,
          this.currentGame.players,
        );

        let deadPlayerIndex = this.gamePlayerRepository.findIndex(
          deadPlayerName,
          this.currentGame.players,
        );

        let weaponIndex = this.gameWeaponRepository.findIndex(
          weaponName,
          this.currentGame.weapons,
        );

        this.currentGame.total_kills++;

        if (killerPlayerName !== '<world>') {
          if (killerPlayerIndex === -1) {
            killerPlayerIndex = this.gamePlayerRepository.addOnGame(
              killerPlayerName,
              this.currentGame.players,
            );

            this.currentGame.players[killerPlayerIndex].kills++;
          }
        }

        if (deadPlayerIndex === -1) {
          deadPlayerIndex = this.gamePlayerRepository.addOnGame(
            deadPlayerName,
            this.currentGame.players,
          );
        }

        if (killerPlayerName === '<world>') {
          this.currentGame.players[deadPlayerIndex].kills--;
        }

        if (weaponIndex === -1) {
          weaponIndex = this.gameWeaponRepository.addOnGame(
            weaponName,
            this.currentGame.weapons,
          );
        }

        this.currentGame.weapons[weaponIndex].kills++;
      }

      this.readingFile = !isLast;
    });

    if (this.readingFile) {
      await sleep(100);
    }

    return this.games;
  }
}
