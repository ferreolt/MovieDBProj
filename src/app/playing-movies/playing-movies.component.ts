import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-playing-movies',
  templateUrl: './playing-movies.component.html',
  styleUrls: ['./playing-movies.component.scss']
})
export class PlayingMoviesComponent implements OnInit, OnDestroy {

  nowPlayingMovies = [];
  imgURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  movieSubscription: Subscription;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getNowPlayingMovies();
    this.movieSubscription = this.movieService.moviesSubject.subscribe(
      (movies: any[]) => {
    for (let i = 0; i < 4 ; i++) {
      this.nowPlayingMovies[i] = this.movieService.nowPlayingMovies[i];
    }
      }
    );
    this.movieService.emitMovieSubject();
  }
  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
  }
  getImage(path: string) {
    return this.imgURL + path;
  }
}
