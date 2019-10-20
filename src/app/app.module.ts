import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlocComponent } from './bloc/bloc.component';
import { HttpClientModule } from '@angular/common/http';
import { MovieService } from './services/movie.service';
import { MovieViewComponent } from './movie-view/movie-view.component';
import { Routes, RouterModule } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SingleMovieComponent } from './single-movie/single-movie.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchResultComponent } from './search-result/search-result.component';
import { NgCircleProgressModule } from 'ng-circle-progress';

const appRoutes: Routes = [
  { path: 'movies', component: MovieViewComponent},
  { path: 'accueil', component: AccueilComponent},
  { path: 'result', component: SearchResultComponent},
  { path: 'result/:id', redirectTo: 'movies/:id'},
  { path: 'movies/:id', component: SingleMovieComponent},
  { path: '', pathMatch: 'prefix', redirectTo: 'movies'},
  { path: 'not-found', component: FourOhFourComponent},
  { path: '**', redirectTo: 'not-found'}
];

@NgModule({
  declarations: [
    AppComponent,
    BlocComponent,
    MovieViewComponent,
    AccueilComponent,
    SingleMovieComponent,
    FourOhFourComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300
    }),
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    MovieService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
