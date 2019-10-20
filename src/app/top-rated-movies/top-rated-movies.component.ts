import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-top-rated-movies',
  templateUrl: './top-rated-movies.component.html',
  styleUrls: ['./top-rated-movies.component.scss']
})
export class TopRatedMoviesComponent implements OnInit, OnDestroy {


  topRatedMovies = [];
  imgURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  movieSubscription: Subscription;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getTopRatedMovies();
    this.movieSubscription = this.movieService.moviesSubject.subscribe(
      (movies: any[]) => {
    for (let i = 0; i < 4 ; i++) {
      this.topRatedMovies[i] = this.movieService.topRatedMovies[i];
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
