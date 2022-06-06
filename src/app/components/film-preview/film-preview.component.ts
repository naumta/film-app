import { Component, Input, OnInit } from '@angular/core';
import { IFilm } from 'src/app/shared/model/film-app.model';

@Component({
  selector: 'app-film-preview',
  templateUrl: './film-preview.component.html',
  styleUrls: ['./film-preview.component.scss']
})

export class FilmPreviewComponent implements OnInit {

  @Input() filmDetails!: IFilm;

  constructor() { }

  ngOnInit(): void {
  }

}
