import { Subject, of } from 'rxjs';
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
   pageSize: number;
   collectionSize: number;

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
                  this.pageSize = response.total_results / response.total_pages;
                  console.log(this.pageSize);
                  this.collectionSize = response.total_results;
                  console.log(this.collectionSize);
                  console.log(response);
                  this.emitMovieSubject();
              },
              (error) => {
                  console.log('Erreur: ' + error);
              }
          );
      }

      search(term: string) {
        if (term === '') {
            return of([]);
        }
        return this.httpClient.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.APIkey + '&language=en-US&query='
          + term + '&page=1&include_adult=false').pipe();
              }
}
