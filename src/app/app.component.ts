import { Component, OnInit } from '@angular/core';
import { IFilm, IFilmSelect } from './shared/model/film-app.model';
import { FilmService } from './shared/service/film.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  films: IFilm[] = [];
  filmInputValue: string = "";


  types: IFilmSelect[] = [
    {value: 'movie', viewValue: 'Movie'},
    {value: 'select', viewValue: 'Select'},
    {value: 'episode', viewValue: 'Episode'},
  ];

  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
  }

  getFilms(filmInputValue: string): void {

    this.filmService.getFilmsByTitle(filmInputValue).subscribe((films: IFilm[]) => {
      this.films = films;
      console.log(films);
    })
  }
}
