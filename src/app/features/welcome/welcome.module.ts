import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeRoutingModule } from './welcome-routing.module';
import { WelcomeContainerComponent } from './welcome-container/welcome-container.component';
import { WelcomeViewComponent } from './welcome-view/welcome-view.component';
import { MaterialModule } from './../../material/material.module';

@NgModule({
  declarations: [WelcomeContainerComponent, WelcomeViewComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WelcomeRoutingModule
  ]
})
export class WelcomeModule { }
