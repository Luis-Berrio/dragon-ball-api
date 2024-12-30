import { Component, inject } from '@angular/core';
import { DragonBallService } from '../../services/dragon-ball.service';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, finalize, tap } from 'rxjs';
import { CardComponent } from '../../components/card/card.component';
import { MatDialog } from '@angular/material/dialog';
import { CharacterDetailComponent } from '../../components/character-detail/character-detail.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { FormsModule } from '@angular/forms'; // Importar para ngModel


@Component({
  selector: 'app-dragon-ball',
  standalone: true,
  imports: [CommonModule, CardComponent, FormsModule],
  templateUrl: './dragon-ball.component.html',
  styleUrl: './dragon-ball.component.css',
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(10px)' }),
        animate('0.5s ease-in-out', style({ opacity: 1, transform: 'translateY(0)' })),
      ]),
    ]),
  ]
})
export class DragonBallComponent {
  private characterService = inject(DragonBallService);
  private snackBar = inject(MatSnackBar);
  private dialog = inject(MatDialog);
  totalItems = 0;

  characters$ = this.characterService.getCharacters();
  isLoading = false;

  ngOnInit() {
    this.loadCharacters();
  }

  goBack() {
    // Navega a la página anterior
    window.history.back();
  }

  loadCharacters() {
    this.characters$ = this.characterService.getCharacters();
  }

  showCharacterDetail(character: any) {
    this.dialog.open(CharacterDetailComponent, {
      data: character,
      panelClass: 'character-dialog',
      maxWidth: '95vw',
      maxHeight: '90vh',
      width: '1000px' // Ancho fijo más pequeño
    });
  }

  fetchCharacters() {
    this.isLoading = true;
    this.characterService
      .fetchCharactersFromExternalApi(this.totalItems)
      .pipe(
        tap(() => {
          this.snackBar.open('Characters fetched successfully!', 'Close', {
            duration: 3000,
          });
          this.loadCharacters();
        }),
        catchError((error) => {
          console.error('Error fetching characters:', error);
          this.snackBar.open(
            'Error fetching characters. Please try again.',
            'Close',
            { duration: 5000 }
          );
          return EMPTY;
        }),
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe({
        error: (err) => {
          console.error('Unexpected error in subscription:', err);
        }
      });
  }


  trackById(index: number, character: any): number {
    return character.id;
  }
}
