import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialExampleComponent } from './components/angular-material-example/angular-material-example.component';

import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FilmItemComponent } from './components/film-item/film-item.component';
import { FilmPreviewComponent } from './components/film-preview/film-preview.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatPaginatorModule} from '@angular/material/paginator';
import { FilmItemDialogComponent } from './components/film-item-dialog/film-item-dialog.component';
import { FilmPaginatorComponent } from './components/film-paginator/film-paginator.component';


@NgModule({
  declarations: [
    AppComponent,
    AngularMaterialExampleComponent,
    FilmItemComponent,
    FilmPreviewComponent,
    FilmItemDialogComponent,
    FilmPaginatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDialogModule,
    MatPaginatorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
