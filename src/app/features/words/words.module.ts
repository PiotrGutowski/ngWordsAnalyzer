import { WordsRoutingModule } from './words-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WordsContainerComponent } from './words-container/words-container.component';
import { WordsViewComponent } from './words-view/words-view.component';

@NgModule({
  declarations: [WordsContainerComponent, WordsViewComponent],
  imports: [
    CommonModule,
    WordsRoutingModule
  ]
})
export class WordsModule { }
