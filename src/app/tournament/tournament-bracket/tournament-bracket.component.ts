import { Component, Input } from '@angular/core';
import { BattleResult } from '../../models/battle-result';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tournament-bracket',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tournament-bracket.component.html',
  styleUrl: './tournament-bracket.component.css'
})
export class TournamentBracketComponent {
  @Input() results: BattleResult[] = [];
}
