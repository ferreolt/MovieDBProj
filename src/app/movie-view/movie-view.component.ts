import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-view',
  templateUrl: './movie-view.component.html',
  styleUrls: ['./movie-view.component.scss']
})
export class MovieViewComponent implements OnInit, OnDestroy {
  movies: any[];
  movieSubscription: Subscription;
  imgURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';

  constructor(private movieService: MovieService)  { }

  ngOnInit() {
    this.movieSubscription = this.movieService.moviesSubject.subscribe(
      (movies: any[]) => {
        this.movies = movies;
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
