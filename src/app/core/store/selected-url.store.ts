import { Injectable } from '@angular/core';
import { AppStore } from '../app-store/app-store';
import { SelectedUrlState } from './selected-url.state';

@Injectable({ providedIn: 'root' })
export class SelectedUrlStore extends AppStore<SelectedUrlState> {

  constructor() {
    super(new SelectedUrlState());
  }
}
