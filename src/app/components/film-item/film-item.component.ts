import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { IFilm, ISearchFilmInfo } from 'src/app/shared/model/film-app.model';
import { FilmService } from 'src/app/shared/service/film.service';
import { FilmItemDialogComponent } from '../film-item-dialog/film-item-dialog.component';


@Component({
  selector: 'app-film-item',
  templateUrl: './film-item.component.html',
  styleUrls: ['./film-item.component.scss']
})
export class FilmItemComponent implements OnInit {

  @Input() film!: ISearchFilmInfo;

  filmDetails!: IFilm;


  constructor(private filmService: FilmService, private dialog: MatDialog) { }

  ngOnInit(): void {

  }

  getFilmInfoById(): void {
    this.filmService.getFilmsById(this.film.imdbID).subscribe((filmInfo: IFilm) => {
      this.filmDetails = filmInfo;
      console.log(this.filmDetails);

      this.dialog.open(FilmItemDialogComponent, {
        data: this.filmDetails
      });


    })

  }


}
