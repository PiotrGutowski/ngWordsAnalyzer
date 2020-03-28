import { SelectedUrlStore } from '@core/store/selected-url.store';
import { WordsService } from '@data-access/words.service';
import { TestBed } from '@angular/core/testing';
import { WordsCeo } from './words-ceo';
import { HttpClient, HttpClientModule } from '@angular/common/http';

class WordsServiceStub {
  getDistinctWords() { }
}

describe('WordsCeo', () => {
  let service: WordsCeo;

  let wordsServiceStub: WordsService;
  let selectedUrlStore: SelectedUrlStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        SelectedUrlStore,
        { provide: WordsService, useClass: WordsServiceStub }]
    });
    service = TestBed.inject(WordsCeo);
    wordsServiceStub = TestBed.inject(WordsService);
    selectedUrlStore = TestBed.inject(SelectedUrlStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
