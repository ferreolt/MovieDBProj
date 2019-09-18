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

const appRoutes: Routes = [
  { path: 'movies', component: MovieViewComponent},
  { path: 'accueil', component: AccueilComponent},
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
  ],
  imports: [
    BrowserModule,
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
