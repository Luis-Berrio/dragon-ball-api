import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
import { Character } from '../models/character.interface';
import { TournamentResult } from '../models/tournamentReults';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  private apiUrl = `${environment.apiUrl}/characters`;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  fetchCharactersFromExternalApi(totalItems: number): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/fetch?totalItems=${totalItems}`, {});
  }
}
