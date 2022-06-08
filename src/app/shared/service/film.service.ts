import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFilm, IResponse } from '../model/film-app.model';
import { Observable } from 'rxjs';

const API_URL = `http://www.omdbapi.com`;
const API_KEY = `b49e8000`;

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  constructor(private http: HttpClient) { }

  getFilmsByTitle(filmInputValue: string, pageNumber: number): Observable<IResponse> {
    return this.http.get<IResponse>(`${API_URL}/?apikey=${API_KEY}&s=${filmInputValue}&page=${pageNumber}`);
  }

  getFilmsById(imdbID: string): Observable<IFilm> {
    return this.http.get<IFilm>(`${API_URL}/?apikey=${API_KEY}&i=${imdbID}`);
  }
}
