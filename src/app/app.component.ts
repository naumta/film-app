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

  length!: IResponse[`totalResults`];
  pageNumber: number = 1;


  types: IFilmSelect[] = [
    {value: 'movie', viewValue: 'Movie'},
    {value: 'select', viewValue: 'Select'},
    {value: 'episode', viewValue: 'Episode'},
  ];


  constructor(private filmService: FilmService) {
  }

  ngOnInit() {
  }

  getFilms(filmInputValue: string, pageNumber: number): void {

    this.filmService.getFilmsByTitle(filmInputValue, pageNumber).subscribe((films: IResponse) => {
      this.films = films;
      this.filmsArray = films.Search;
      this.length = films.totalResults;
      this.pageNumber = pageNumber;
      console.log(this.films);
      console.log(this.filmsArray);

    })
  }



}
