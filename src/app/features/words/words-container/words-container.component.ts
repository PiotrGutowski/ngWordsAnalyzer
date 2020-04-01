import { Component, OnInit, OnDestroy } from '@angular/core';
import { WordsCeo } from '../services/words-ceo';
import { Observable, Subject } from 'rxjs';
import { GetDistinctWordsResponseContentDto, GetDistinctWordsResponseDto } from '@data-access/models/words-types';
import { takeUntil, map } from 'rxjs/operators';

@Component({
  selector: 'app-words-container',
  templateUrl: './words-container.component.html',
  styleUrls: ['./words-container.component.scss'],
  providers: [WordsCeo]
})
export class WordsContainerComponent implements OnInit, OnDestroy {

  private unSubscribe$ = new Subject<void>();
  distinctWords$: Observable<GetDistinctWordsResponseDto>;

  constructor(private wordsCeo: WordsCeo) {

  }

  ngOnInit(): void {
    this.wordsCeo.getAllDistinctWords$();
    this.distinctWords$ = this.wordsCeo.getDistinctWordsFromStrore$().pipe(map(data => data.distinctWords));
  }

  updateSelectedWord(item: GetDistinctWordsResponseContentDto): void {
    this.wordsCeo.manageSelectedWord(item).pipe(takeUntil(this.unSubscribe$)).subscribe(() => {
      this.wordsCeo.updatedWordStore(item);
    });
  }

  ngOnDestroy(): void {
    this.unSubscribe$.next();
    this.unSubscribe$.complete();
  }
}
