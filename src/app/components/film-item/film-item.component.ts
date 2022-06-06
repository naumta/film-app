import { Component, Input, OnInit } from '@angular/core';
import { IFilm, ISearchFilmInfo } from 'src/app/shared/model/film-app.model';
import { FilmService } from 'src/app/shared/service/film.service';


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() film!: ISearchFilmInfo;

  filmDetails!: IFilm;


  constructor(private filmService: FilmService) { }

  ngOnInit(): void {

  }

  getFilmInfoById(): void {
    this.filmService.getFilmsById(this.film.imdbID).subscribe((filmInfo: IFilm) => {
      this.filmDetails = filmInfo;

      console.log(this.filmDetails);
    })

  }


}
