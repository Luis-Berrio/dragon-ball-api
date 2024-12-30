import { Component } from '@angular/core';
import { Character } from '../../models/character.interface';
import { TournamentResult } from '../../models/tournamentReults';
import { DragonBallService } from '../../services/dragon-ball.service';
import { CharacterSelectionComponent } from '../character-selection/character-selection.component';
import { CommonModule } from '@angular/common';
import { TournamentBracketComponent } from '../tournament-bracket/tournament-bracket.component';

@Component({
  selector: 'app-tournament',
  standalone: true,
  imports: [CharacterSelectionComponent, CommonModule, TournamentBracketComponent],
  templateUrl: './tournament.component.html',
  styleUrl: './tournament.component.css'
})
export class TournamentComponent {
  characters: Character[] = [];
  selectedCharacters: string[] = [];
  tournamentResults: TournamentResult | null = null;

  constructor(private dragonBallService: DragonBallService) {}

  ngOnInit() {
    this.dragonBallService.getCharacters().subscribe(
      characters => this.characters = characters,
      error => console.error('Error fetching characters:', error)
    );
  }

  handleCharacterSelect(id: string) {
    if (this.selectedCharacters.includes(id)) {
      this.selectedCharacters = this.selectedCharacters.filter(charId => charId !== id);
    } else if (this.selectedCharacters.length < 8) {
      this.selectedCharacters.push(id);
    }
  }

  startTournament() {
    if (this.selectedCharacters.length !== 8) {
      alert('Please select exactly 8 characters');
      return;
    }

    this.dragonBallService.simulateTournament(this.selectedCharacters).subscribe(
      results => this.tournamentResults = results,
      error => console.error('Error starting tournament:', error)
    );
  }
}
