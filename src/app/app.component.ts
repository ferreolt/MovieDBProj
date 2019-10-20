import { Component, OnInit, OnDestroy} from '@angular/core';
import { MovieService } from './services/movie.service';
import { Observable, interval, Subscription } from 'rxjs';
import { SearchResultComponent } from './search-result/search-result.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    secondes: number;
    counterSubscription: Subscription;

  constructor(private movieService: MovieService, private searchResult: SearchResultComponent) {

  }

  ngOnInit() {
    const counter = interval(1000);
    this.counterSubscription = counter.subscribe(
      (value) => {
        this.secondes = value;
      },
      (error) => {
        console.log('error: ' + error);
      },
      () => {
        console.log('Completed');
      }
    );
  }

  ngOnDestroy() {
    this.counterSubscription.unsubscribe();
  }

  search(query: string) {
    this.movieService.query = query;
    this.searchResult.ngOnInit();
  }
}
