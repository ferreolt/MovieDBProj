import { Component, OnInit, OnDestroy, Injectable } from '@angular/core';
import { Subscription } from 'rxjs';
import { MovieService } from '../services/movie.service';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})

@Injectable({
  providedIn: 'root'
})
export class SearchResultComponent implements OnInit, OnDestroy {
  query: string;
  movies: any[];
  movieSubscription: Subscription;
  imgURL = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  page = 1;
  pageSize: number;
  collectionSize: number;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getResultFromSearch(this.page);
    this.movieSubscription = this.movieService.moviesSubject.subscribe(
      (movies: any[]) => {
        this.movies = movies;
        this.pageSize = this.movieService.pageSize;
        this.collectionSize = this.movieService.collectionSize;
        this.query = this.movieService.query;
      }
    );
    this.movieService.emitMovieSubject();
  }
  ngOnDestroy() {
    this.movieSubscription.unsubscribe();
  }

  onChangePage() {
    this.movieService.getResultFromSearch(this.page);
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
