import { Component, OnInit, OnDestroy } from '@angular/core';
import { MovieService } from '../services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit, OnDestroy {

  searchMovies = [];
  topRatedMovies = [];
  upcommingMovies = [];

  constructor() { }

  ngOnInit() {
  }
  ngOnDestroy() {
  }

}
