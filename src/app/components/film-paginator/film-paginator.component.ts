import { Component, Input, OnInit } from '@angular/core';
import { IResponse } from 'src/app/shared/model/film-app.model';

@Component({
  selector: 'app-film-paginator',
  templateUrl: './film-paginator.component.html',
  styleUrls: ['./film-paginator.component.scss']
})
export class FilmPaginatorComponent implements OnInit {

  @Input() length!: IResponse[`totalResults`];
  @Input() pageNumber!: number;

  firstPageLabel = `First page`;
  itemsPerPageLabel = `Items per page:`;
  lastPageLabel = `Last page`;

  nextPageLabel = 'Next page';
  previousPageLabel = 'Previous page';

  constructor() { }

  ngOnInit(): void {
  }

  getRangeLabel(pageNumber: number, pageSize: number, length: number): string {

    if (length === 0) {
      return `Page 1 of 1`;
    }
    const amountPages = Math.ceil(length / pageSize);
    return `Page ${pageNumber + 1} of ${amountPages}`;
  }

}
