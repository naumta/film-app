import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmPaginatorComponent } from './film-paginator.component';

describe('FilmPaginatorComponent', () => {
  let component: FilmPaginatorComponent;
  let fixture: ComponentFixture<FilmPaginatorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilmPaginatorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmPaginatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
