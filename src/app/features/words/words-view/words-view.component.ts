import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { GetDistinctWordsResponseDto } from '@data-access/models/words-types';
import { GetDistinctWordsResponseContentDto } from '@data-access/models/words-types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-words-view',
  templateUrl: './words-view.component.html',
  styleUrls: ['./words-view.component.scss']
})
export class WordsViewComponent implements OnInit {

  isKnown: boolean;
  @Input() distinctWords$: Observable<GetDistinctWordsResponseDto>;
  @Output() updateSelectedWord: EventEmitter<GetDistinctWordsResponseContentDto> =
    new EventEmitter<GetDistinctWordsResponseContentDto>();

  constructor() { }

  ngOnInit(): void {
  }

  manageSelectedWord(item: GetDistinctWordsResponseContentDto): void {
    this.updateSelectedWord.emit(item);
  }

  setKnownIcon(isKnown: boolean): string {
    return isKnown ? 'thumb_up_alt' : 'thumb_down';
  }

  trackByWord(index, item) {
    return index;
  }
}
