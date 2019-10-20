import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayingMoviesComponent } from './playing-movies.component';

describe('PlayingMoviesComponent', () => {
  let component: PlayingMoviesComponent;
  let fixture: ComponentFixture<PlayingMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayingMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
