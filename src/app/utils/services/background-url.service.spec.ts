import { TestBed } from '@angular/core/testing';

import { BackgroundUrlService } from './background-url.service';

describe('BackgroundUrlService', () => {
  let service: BackgroundUrlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackgroundUrlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getYouTubeSelectedMovieId should return proper id', () => {
    const youTubeUrl = 'https://www.youtube.com/watch?v=fM_jWSfOUOo';
    const youTubeId = 'fM_jWSfOUOo';
    expect(service.getYouTubeSelectedMovieId(youTubeUrl)).toEqual(youTubeId);
  });
});
