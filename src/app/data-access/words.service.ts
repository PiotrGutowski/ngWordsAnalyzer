import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private REST_API_SERVER = 'http://52.19.96.111:8080/distinct/words/';
  constructor(private httpClient: HttpClient) { }

  getDistinctWords(id: string): Observable<any> {
    return this.httpClient.get(this.REST_API_SERVER + id);

  }
}
