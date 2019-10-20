import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallBlocComponent } from './small-bloc.component';

describe('SmallBlocComponent', () => {
  let component: SmallBlocComponent;
  let fixture: ComponentFixture<SmallBlocComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallBlocComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallBlocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
