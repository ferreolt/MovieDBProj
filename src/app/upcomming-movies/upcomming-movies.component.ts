import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-upcomming-movies',
  templateUrl: './upcomming-movies.component.html',
  styleUrls: ['./upcomming-movies.component.scss']
})
export class UpcommingMoviesComponent implements OnInit, OnDestroy {

  upCommingMovies = [];
  imgURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  movieSubscription: Subscription;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getUpcommingMovies();
    this.movieSubscription = this.movieService.moviesSubject.subscribe(
      (movies: any[]) => {
    for (let i = 0; i < 4 ; i++) {
      this.upCommingMovies[i] = this.movieService.upcommingMovies[i];
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
