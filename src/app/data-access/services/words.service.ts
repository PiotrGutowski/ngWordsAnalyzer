import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetDistinctWordsResponseDto, WordDto } from '@data-access/models/words-types';

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  private REST_API_SERVER = 'http://52.19.96.111:8080/hateoas/distinct/words/';
  constructor(private httpClient: HttpClient) { }

  getDistinctWords(id: string): Observable<GetDistinctWordsResponseDto> {
    return this.httpClient.get<GetDistinctWordsResponseDto>(this.REST_API_SERVER + id);
  }

  addToKnownWordsList(hateoas: string): Observable<WordDto[]> {
    return this.httpClient.put<WordDto[]>(hateoas, {});
  }

  deleteFromKnownWordsList(hateoas: string): Observable<WordDto[]> {
    return this.httpClient.delete<WordDto[]>(hateoas);
  }
}
