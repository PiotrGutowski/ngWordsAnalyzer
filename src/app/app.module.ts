import { LayoutModule } from './layout/layout.module';
import { MaterialModule } from './material/material.module';
import { DataAccessModule } from './data-access/data-access.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayoutModule,
    AppRoutingModule,
    DataAccessModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
