import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviePortalComponent } from './movie-portal.component';

describe('MoviePortalComponent', () => {
  let component: MoviePortalComponent;
  let fixture: ComponentFixture<MoviePortalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MoviePortalComponent]
    });
    fixture = TestBed.createComponent(MoviePortalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
