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
  page = 1;
  pageSize = this.movieService.pageSize;
  collectionSize = this.movieService.collectionSize;

  constructor(private movieService: MovieService)  { }

  ngOnInit() {
    this.movieService.getPopularMoviesFromServer(this.page);
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

  onChangePage() {
    this.movieService.getPopularMoviesFromServer(this.page);
    const scrollToTop = window.setInterval(() => {
      const pos = window.pageYOffset;
      if (pos > 0) {
          window.scrollTo(0, pos - 20); // how far to scroll on each step
      } else {
          window.clearInterval(scrollToTop);
      }
  }, 1);
  }

  getImage(path: string) {
    return this.imgURL + path;
  }
}
