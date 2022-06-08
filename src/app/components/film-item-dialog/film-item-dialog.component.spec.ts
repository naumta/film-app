import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmItemDialogComponent } from './film-item-dialog.component';

describe('FilmItemDialogComponent', () => {
  let component: FilmItemDialogComponent;
  let fixture: ComponentFixture<FilmItemDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmItemDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmItemDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
