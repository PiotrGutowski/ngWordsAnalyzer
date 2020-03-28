import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-welcome-view',
  templateUrl: './welcome-view.component.html',
  styleUrls: ['./welcome-view.component.scss']
})
export class WelcomeViewComponent implements OnInit {

  @Output() getPageUrl: EventEmitter<void> = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  getUrl(): void {
    this.getPageUrl.emit();
  }
}
