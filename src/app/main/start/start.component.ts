import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {


  url: string;
  tabs: any;
  constructor() { }

  ngOnInit(): void {
    chrome.tabs.query({
      active: true,
      currentWindow: true
    }, (tabs) => {
      this.tabs = tabs;
    });

    chrome.alarms.create('5min', {
      delayInMinutes: 1,
      periodInMinutes: 1
    });

    chrome.alarms.onAlarm.addListener(function (alarm) {
      if (alarm.name === '5min') {

      }
    });
  }

  getUrl(): void {
    this.url = this.tabs[0].url;
    console.log(this.tabs, 'tab')
    console.log(this.url, 'url');
  }
}
