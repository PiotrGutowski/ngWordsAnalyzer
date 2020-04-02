import { BackgroundUrlService } from '@utils/services/background-url.service';
import { Injectable } from '@angular/core';
import { SelectedUrlState } from '@core/store/selected-url.state';
import { SelectedUrlStore } from '@core/store/selected-url.store';
import { DistinctWordsState } from '@core/store/distinct-words.state';
import { DistinctWordsStore } from '@core/store/distinct-words.store';
import { Observable } from 'rxjs';
import { WordsService } from '@data-access/services/words.service';
import { map, concatMap } from 'rxjs/operators';
import { GetDistinctWordsResponseDto, GetDistinctWordsResponseContentDto, WordDto } from '@data-access/models/words-types';

@Injectable()
export class WordsCeo {

  constructor(
    private wordsService: WordsService,
    private distinctWordsStore: DistinctWordsStore,
    private backgroundUrlService: BackgroundUrlService,
    private selectedUrlStore: SelectedUrlStore) { }

  getAllDistinctWords$(): void {
    this.getUrlFromStore$().pipe(
      map(data => {
        console.log(data.selectedUrl, 'data');
        return this.backgroundUrlService.getYouTubeSelectedMovieId(data.selectedUrl);
      }),
      concatMap(url => this.getAllDistinctWordsFromPage$(url)))
      .subscribe(data => this.storeDistinctWords(data));
  }

  private getAllDistinctWordsFromPage$(id: string): Observable<GetDistinctWordsResponseDto> {
    return this.wordsService.getDistinctWords(id);
  }

  private getUrlFromStore$(): Observable<SelectedUrlState> {
    return this.selectedUrlStore.state$;
  }

  private storeDistinctWords(words: GetDistinctWordsResponseDto): void {
    this.distinctWordsStore.setPartialState('distinctWords', words);
  }

  getDistinctWordsFromStrore$(): Observable<DistinctWordsState> {
    return this.distinctWordsStore.state$;
  }

  manageSelectedWord(selectedWord: GetDistinctWordsResponseContentDto): Observable<WordDto[]> {
    if (selectedWord.known === true) {
      return this.wordsService.deleteFromKnownWordsList(selectedWord.links[0].href);
    } else {
      return this.wordsService.addToKnownWordsList(selectedWord.links[0].href);
    }
  }

  updatedWordStore(selectedWord: GetDistinctWordsResponseContentDto): void {
    const currentSate = this.distinctWordsStore.state.distinctWords;
    const newState = {
      distinctWords: currentSate
    };
    newState.distinctWords.content.find(data => data.word === selectedWord.word).known = !selectedWord.known;
    this.distinctWordsStore.setPartialState('distinctWords', newState.distinctWords);
  }
}
