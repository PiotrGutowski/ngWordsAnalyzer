import { SelectedUrlStore } from '@core/store/selected-url.store';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WelcomeCeo {

  constructor(private selectedUrlStore: SelectedUrlStore) { }

  getPageUrl(): void {
    let url: string;
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      url = tabs[0].url;
      if (url !== undefined) {
        this.storePageUrl(url);
      }
    });
  }

  private storePageUrl(url: string): void {
    this.selectedUrlStore.setPartialState('selectedUrl', url);
  }
}
