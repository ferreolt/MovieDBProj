import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PagedResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: [];
}
@Injectable()
export class MovieService {
  moviesSubject = new Subject<any[]>();
  APIkey = '35acf57e110152e86051b27d867edbc2';
   private movies = [];
    response: PagedResponse;

      constructor(private httpClient: HttpClient) { }

      getMovieById(id: number) {
          const movie = this.movies.find(
              (s) => {
                  return s.id === id;
              }
          );
          return movie;
      }
      emitMovieSubject() {
          this.moviesSubject.next(this.movies.slice());
      }

      getPopularMoviesFromServer(page: number) {
          this.httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.APIkey + '&language=en-US&page=' + page)
          .subscribe(
              (response: PagedResponse) => {
                  this.movies = response.results;
                  this.response = response;
                  console.log(response);
                  this.emitMovieSubject();
              },
              (error) => {
                  console.log('Erreur: ' + error);
              }
          );
      }
}
