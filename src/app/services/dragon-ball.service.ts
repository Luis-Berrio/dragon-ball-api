import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../enviroments/enviroment';
import { Character } from '../models/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DragonBallService {
  private apiUrl = `${environment.apiUrl}/characters`;

  constructor(private http: HttpClient) {}

  getCharacters(): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl);
  }

  getCharacter(id: number): Observable<Character> {
    return this.http.get<Character>(`${this.apiUrl}/${id}`);
  }

  fetchCharactersFromExternalApi(): Observable<void> {
    return this.http.post<void>(`${this.apiUrl}/fetch`, {});
  }
}
