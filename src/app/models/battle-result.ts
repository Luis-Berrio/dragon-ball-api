import { Character } from "./character.interface";

export interface BattleResult {
  player1: Character;
  player2: Character;
  winner: Character;
  winningPower: number;
  battleLog: string[];
}
