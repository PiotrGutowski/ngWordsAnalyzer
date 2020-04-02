import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BackgroundUrlService {

  constructor() { }

  getYouTubeSelectedMovieId(url: string): string {
    return url.substring(url.lastIndexOf('=') + 1);
  }
}
