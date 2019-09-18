import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class MovieService {
  moviesSubject = new Subject<any[]>();
  APIkey = '35acf57e110152e86051b27d867edbc2';
   private movies = [];
   private  result = {};

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

      getPopularMoviesFromServer() {
          this.httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.APIkey + '&language=en-US&page=1')
          .subscribe(
              (response) => {
                  this.result = response;
                  this.movies = this.result.results;
                  console.log(this.result.results);
                  this.emitMovieSubject();
              },
              (error) => {
                  console.log('Erreur: ' + error);
              }
          );
      }
}
