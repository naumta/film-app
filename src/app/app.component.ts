import { Component, OnInit } from '@angular/core';
import { IFilm } from './shared/model/film-app.model';
import { FilmService } from './shared/service/film.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'film-app';
  films: IFilm[] = [];

  constructor(private filmService: FilmService) {

  }

  ngOnInit() {
    this.getFilms();
  }

  getFilms(): void {
    this.filmService.getAllFilms().subscribe((films: IFilm[]) => {
      this.films = films;
      console.log(films);
    })
  }
}
