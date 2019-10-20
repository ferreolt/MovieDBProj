import { Component, OnInit} from '@angular/core';
import { MovieService } from '../services/movie.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})

export class SingleMovieComponent implements OnInit {
  title =  'Movie';
  image = 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/';
  note: number;
  noteCount: number;
  outterColor: string;
  innerColor: string;
  overview: string;

  constructor(private movieService: MovieService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    const movie = this.movieService.getMovieById(+id);
    this.title = movie.title;
    this.image += movie.poster_path;
    this.overview = movie.overview;
    this.noteCount = movie.vote_count;
    this.note = movie.vote_average;
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
}
