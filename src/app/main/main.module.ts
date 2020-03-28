import { MaterialModule } from './../material/material.module';
import { WelcomeModule } from './../features/welcome/welcome.module';
import { MainRoutingModule } from './main-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [StartComponent],
  imports: [
    CommonModule,
    MaterialModule,
    WelcomeModule,
    MainRoutingModule
  ]
})
export class MainModule { }
