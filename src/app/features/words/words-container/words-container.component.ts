import { Component, OnInit } from '@angular/core';
import { WordsCeo } from '../services/words-ceo';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-words-container',
  templateUrl: './words-container.component.html',
  styleUrls: ['./words-container.component.scss']
})
export class WordsContainerComponent implements OnInit {

  distinctWords$: Observable<string[]>;
  constructor(private wordsCeo: WordsCeo) { }

  ngOnInit(): void {
    this.distinctWords$ = this.wordsCeo.getAllDistinctWords$();
  }
}
