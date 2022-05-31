import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFilm } from '../model/film-app.model';
import { Observable } from 'rxjs';

const API_URL = `http://img.omdbapi.com/?apikey=[b49e8000]`;

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private http: HttpClient) { }

  getAllFilms(): Observable<IFilm[]> {
    return this.http.get<IFilm[]>(`${API_URL}`);
  }
}
