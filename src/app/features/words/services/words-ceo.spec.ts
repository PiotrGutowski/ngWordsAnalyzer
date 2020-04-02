import { GetDistinctWordsResponseDto } from '@data-access/models/words-types';
import { DistinctWordsStore } from '@core/store/distinct-words.store';
import { GetDistinctWordsResponseContentDto } from '@data-access/models/words-types';
import { SelectedUrlStore } from '@core/store/selected-url.store';
import { WordsService } from '@data-access/services/words.service';
import { TestBed } from '@angular/core/testing';
import { WordsCeo } from './words-ceo';
import { HttpClient, HttpClientModule } from '@angular/common/http';

class WordsServiceStub {
  getDistinctWords() { }
  deleteFromKnownWordsList() { }
  addToKnownWordsList() { }
}

describe('WordsCeo', () => {
  let service: WordsCeo;

  let wordsServiceStub: WordsService;
  let selectedUrlStore: SelectedUrlStore;
  let distinctWordsStore: DistinctWordsStore;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        HttpClient,
        SelectedUrlStore,
        DistinctWordsStore,
        WordsCeo,
        { provide: WordsService, useClass: WordsServiceStub }]
    });
    service = TestBed.inject(WordsCeo);
    wordsServiceStub = TestBed.inject(WordsService);
    selectedUrlStore = TestBed.inject(SelectedUrlStore);
    distinctWordsStore = TestBed.inject(DistinctWordsStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('manageSelectedWord should call deleteFromKnownWordsList if user know selected word', () => {
    const deleteFromKnownWordsList = spyOn(wordsServiceStub, 'deleteFromKnownWordsList').and.stub();
    const selectedWord = createSelectedWord(true);
    service.manageSelectedWord(selectedWord);
    expect(deleteFromKnownWordsList).toHaveBeenCalledTimes(1);
  });

  it('manageSelectedWord should call addToKnownWordsList if user know selected word', () => {
    const addToKnownWordsList = spyOn(wordsServiceStub, 'addToKnownWordsList').and.stub();
    const selectedWord = createSelectedWord(false);
    service.manageSelectedWord(selectedWord);
    expect(addToKnownWordsList).toHaveBeenCalledTimes(1);
  });

  it('updatedWordStore should update word status in store', () => {
    const distinctWord = createDistinctWord(true);
    const selectedWord = createSelectedWord(true);
    distinctWordsStore.setPartialState('distinctWords', distinctWord);
    service.updatedWordStore(selectedWord);

    const distinctWordAfterUpdate = createDistinctWord(false);
    expect(distinctWordsStore.state.distinctWords.content[0].known)
      .toEqual(distinctWordAfterUpdate.content[0].known);
  });
});

function createSelectedWord(status: boolean): GetDistinctWordsResponseContentDto {
  return {
    word: 'test',
    known: status,
    links: [{ rel: 'self', href: 'www.test.com' }]
  };
}

function createDistinctWord(status: boolean): GetDistinctWordsResponseDto {
  return {
    links: [{ rel: 'self', href: 'www.text.com' }],
    content: [{
      word: 'test',
      known: status,
      links: [{ rel: 'self', href: 'www.test.com' }]
    }]
  };

}
