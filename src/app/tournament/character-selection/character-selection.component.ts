import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../models/character.interface';

@Component({
  selector: 'app-character-selection',
  standalone: true,
  template: './character-selection.component.html',
  styles: './character-selection.component.css'
})
export class CharacterSelectionComponent {
  @Input() characters: Character[] = [];
  @Input() selectedCharacters: string[] = [];
  @Output() characterSelect = new EventEmitter<string>();

  isSelected(id: string): boolean {
    return this.selectedCharacters.includes(id);
  }

  toggleSelection(id: string): void {
    this.characterSelect.emit(id);
  }
}
