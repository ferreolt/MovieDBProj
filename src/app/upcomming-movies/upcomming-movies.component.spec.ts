import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpcommingMoviesComponent } from './upcomming-movies.component';

describe('UpcommingMoviesComponent', () => {
  let component: UpcommingMoviesComponent;
  let fixture: ComponentFixture<UpcommingMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpcommingMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpcommingMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
