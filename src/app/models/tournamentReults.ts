import { BattleResult } from "./battle-result";
import { Character } from "./character.interface";

export interface TournamentResult {
  battleResults: BattleResult[];
  winner: Character;
  tournamentLog: string[];
}
