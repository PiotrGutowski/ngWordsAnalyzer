import { TestBed } from '@angular/core/testing';
import { WordsService } from '../words.service';
import { HttpClientModule } from '@angular/common/http';

describe('WordsService', () => {
  let service: WordsService;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        imports: [HttpClientModule],
        providers: []
      });
    service = TestBed.inject(WordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
