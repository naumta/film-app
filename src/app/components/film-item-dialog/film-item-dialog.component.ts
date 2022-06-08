import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IFilm } from 'src/app/shared/model/film-app.model';

@Component({
  selector: 'app-film-item-dialog',
  templateUrl: './film-item-dialog.component.html',
  styleUrls: ['./film-item-dialog.component.scss']
})
export class FilmItemDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<FilmItemDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: IFilm,) { }

  ngOnInit(): void {
  }

}
