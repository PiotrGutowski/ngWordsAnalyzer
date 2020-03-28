import { Injectable } from '@angular/core';
import { AppStore } from '../app-store/app-store';
import { DistinctWordsState } from './distinct-words.state';

@Injectable({ providedIn: 'root' })
export class DistinctWordsStore extends AppStore<DistinctWordsState> {

  constructor() {
    super(new DistinctWordsState());
  }
}
