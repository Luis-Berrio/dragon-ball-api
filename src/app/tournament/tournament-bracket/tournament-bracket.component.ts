import { Component, Input } from '@angular/core';
import { BattleResult } from '../../models/battle-result';

@Component({
  selector: 'app-tournament-bracket',
  standalone: true,
  imports: [],
  templateUrl: './tournament-bracket.component.html',
  styleUrl: './tournament-bracket.component.css'
})
export class TournamentBracketComponent {
  @Input() results: BattleResult[] = [];
}
