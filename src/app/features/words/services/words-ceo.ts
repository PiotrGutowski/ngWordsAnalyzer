import { Injectable } from '@angular/core';
import { SelectedUrlState } from '@core/store/selected-url.state';
import { SelectedUrlStore } from '@core/store/selected-url.store';
import { Observable } from 'rxjs';
import { WordsService } from '@data-access/words.service';
import { map, concatMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WordsCeo {

  constructor(private wordsService: WordsService, private selectedUrlStore: SelectedUrlStore) { }

  getAllDistinctWords$(): Observable<string[]> {
    return this.getUrlFromStore$().pipe(
      map(data => {
        console.log(data.selectedUrl, 'data');
        return data.selectedUrl.substring(data.selectedUrl.lastIndexOf('=') + 1);
      }),
      concatMap(url => this.getAllDistinctWordsFromPage$(url)));
  }

  private getAllDistinctWordsFromPage$(id: string): Observable<string[]> {
    return this.wordsService.getDistinctWords(id);
  }

  private getUrlFromStore$(): Observable<SelectedUrlState> {
    return this.selectedUrlStore.state$;
  }
}
