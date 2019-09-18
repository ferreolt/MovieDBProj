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
  image = 'image';

  constructor(private movieService: MovieService, private route: ActivatedRoute) {

  }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.title = this.movieService.getMovieById(+id).title;
    this.image = this.movieService.getMovieById(+id).image;
  }
}
