import { Subject, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface PagedResponse {
    page: number;
    total_results: number;
    total_pages: number;
    results: [];
    genres: [{id: number, name: string}];
}
@Injectable()
export class MovieService {
  moviesSubject = new Subject<any[]>();
   private APIkey = '35acf57e110152e86051b27d867edbc2';
   private popularMovies = [];
   movie: {title: string, poster_path: string, overview: string, vote_count: number, vote_average: number};
   searchMovies = [];
   topRatedMovies = [];
   upcommingMovies = [];
   nowPlayingMovies = [];
   pageSize: number;
   collectionSize: number;
   query: string;

      constructor(private httpClient: HttpClient) { }

      getMovieById(id: number) {
          this.httpClient.get('https://api.themoviedb.org/3/movie/' + id + '?api_key=' + this.APIkey + '&language=en-US')
          .subscribe(
            (response: {title: string, poster_path: string, overview: string, vote_count: number, vote_average: number}) => {
                this.movie = response;
                console.log('movieservice movie');
                console.log(this.movie);
                this.emitMovieSubject();
            },
            (error) => {
                console.log('Erreur: ' + error);
            }
        );
      }
      emitMovieSubject() {
          this.moviesSubject.next(this.popularMovies.slice());
      }

      getUpcommingMovies() {
        this.httpClient.get('https://api.themoviedb.org/3/movie/upcoming?api_key=' + this.APIkey + '&language=en-US')
        .subscribe(
            (response: PagedResponse) => {
                this.upcommingMovies = response.results;
                console.log('up');
                console.log(this.upcommingMovies);
                this.emitMovieSubject();
            },
            (error) => {
                console.log('Erreur: ' + error);
            }
        );
      }

      getTopRatedMovies() {
        this.httpClient.get('https://api.themoviedb.org/3/movie/top_rated?api_key=' + this.APIkey + '&language=en-US')
        .subscribe(
            (response: PagedResponse) => {
                this.topRatedMovies = response.results;
                console.log('top');
                console.log(this.topRatedMovies);
                this.emitMovieSubject();
            },
            (error) => {
                console.log('Erreur: ' + error);
            }
        );
      }

      getNowPlayingMovies() {
        this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=' + this.APIkey + '&language=en-US')
        .subscribe(
            (response: PagedResponse) => {
                this.nowPlayingMovies = response.results;
                console.log('playing');
                console.log(this.nowPlayingMovies);
                this.emitMovieSubject();
            },
            (error) => {
                console.log('Erreur: ' + error);
            }
        );

      }

      getPopularMoviesFromServer(page: number) {
          this.httpClient.get('https://api.themoviedb.org/3/movie/popular?api_key=' + this.APIkey + '&language=en-US&page=' + page)
          .subscribe(
              (response: PagedResponse) => {
                  this.popularMovies = response.results;
                  this.pageSize = response.total_results / response.total_pages;
                  console.log(this.pageSize);
                  this.collectionSize = response.total_results;
                  console.log(this.collectionSize);
                  console.log('popular');
                  console.log(response.results);
                  this.emitMovieSubject();
              },
              (error) => {
                  console.log('Erreur: ' + error);
              }
          );
      }

      getResultFromSearch(page: number) {
        this.httpClient.get('https://api.themoviedb.org/3/search/movie?api_key=' + this.APIkey + '&language=en-US&query='
        + this.query + '&page=' + page)
        .subscribe(
            (response: PagedResponse) => {
                this.searchMovies = response.results;
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
}
