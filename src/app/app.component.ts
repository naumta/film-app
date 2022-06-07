import { Component, Input, OnInit } from '@angular/core';
import { IFilm, IFilmSelect, IResponse, ISearchFilmInfo } from './shared/model/film-app.model';
import { FilmService } from './shared/service/film.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  films!: IResponse;
  filmInputValue: string = "";
  filmsArray: ISearchFilmInfo[] = [];
  filmType: string = "Movie";

  length!: string;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];



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

    this.filmService.getFilmsByTitle(filmInputValue).subscribe((films: IResponse) => {
      this.films = films;
      this.filmsArray = films.Search;
      this.length = films.totalResults;
      console.log(this.films);
      console.log(this.filmsArray);
      console.log(this.length);
    })
  }



}
