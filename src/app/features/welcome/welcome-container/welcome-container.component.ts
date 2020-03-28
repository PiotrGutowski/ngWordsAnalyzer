import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WelcomeCeo } from './../services/welcome-ceo';

@Component({
  selector: 'app-welcome-container',
  templateUrl: './welcome-container.component.html',
  styleUrls: ['./welcome-container.component.scss']
})
export class WelcomeContainerComponent implements OnInit {

  constructor(private router: Router, private welcomeCeo: WelcomeCeo) { }

  ngOnInit(): void {

  }

  getPageUrl(): void {
    this.welcomeCeo.getPageUrl();
    this.router.navigate(['words']);
  }

}
