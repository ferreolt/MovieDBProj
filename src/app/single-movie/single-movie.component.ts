import { Component, OnInit} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})

export class SingleMovieComponent implements OnInit {
  title =  'Movie';
  image = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  note: number;
  movie: {title: string, poster_path: string, overview: string, vote_count: number, vote_average: number};
  noteCount: number;
  outterColor: string;
  innerColor: string;
  overview: string;
  movieSubscription: Subscription;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.movieService.getMovieById(id);
    this.movieSubscription = this.movieService.moviesSubject.subscribe(
      (movies: any[]) => {
        this.movie = this.movieService.movie;
        this.title = this.movie.title;
        this.image += this.movie.poster_path;
        this.overview = this.movie.overview;
        this.noteCount = this.movie.vote_count;
        this.note = this.movie.vote_average;
        if (this.note >= 7) {
          this.outterColor = '#78C000';
          this.innerColor = '#C7E596';
        } else if (this.note < 7 && this.note >= 4) {
          this.outterColor = '#E37316';
          this.innerColor = '#E39B16';
        } else {
          this.outterColor = '#E81414';
          this.innerColor = '#E84414';
        }
      }
    );
  }
}
