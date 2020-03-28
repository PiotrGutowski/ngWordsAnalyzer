import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-words-view',
  templateUrl: './words-view.component.html',
  styleUrls: ['./words-view.component.scss']
})
export class WordsViewComponent implements OnInit {

  @Input() distinctWords$: Observable<string[]>;
  constructor() { }

  ngOnInit(): void {
  }

}
