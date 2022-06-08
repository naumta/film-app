export interface IFilmSelect {
  value: string,
  viewValue: string
}

export interface IResponse {
  Response: boolean,
  Search: ISearchFilmInfo[],
  totalResults: number
}

export interface ISearchFilmInfo {
    Poster: string,
    Title: string,
    Type: string,
    Year: number,
    imdbID: string
}

export interface IFilm {
  Title: string,
  Released: string,
  Genre: string,
  Director: string,
  Writer: string,
  Actors: string,
  Plot: string,
  Language: string,
  Country: string,
  Awards: string,
  Poster: string,
  Ratings: {
      Source: string,
      Value: string
    }[],
  Metascore: number,
  imdbRating: number,
  imdbVotes: string,
  imdbID: string,
  Type: string,
  DVD: string,
  BoxOffice: string,
  Production: string,
  Website: string,
  Response: boolean
}
