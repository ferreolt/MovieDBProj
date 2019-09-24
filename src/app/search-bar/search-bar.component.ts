import { Component, OnInit } from '@angular/core';
import {debounceTime, distinctUntilChanged, map, tap, switchMap, catchError} from 'rxjs/operators';
import { MovieService } from '../services/movie.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  searching = false;
  searchFailed = false;

  constructor(private movieService: MovieService) { }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term =>
        this.movieService.search(term).pipe(
          tap(() => this.searchFailed = false),
          catchError(() => {
            this.searchFailed = true;
            return of([]);
          }))
      ),
      tap(() => this.searching = false)
    )

  ngOnInit() {
  }

}
