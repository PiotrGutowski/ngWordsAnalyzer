import { WelcomeContainerComponent } from './../features/welcome/welcome-container/welcome-container.component';
import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', component: StartComponent, children:
      [
        { path: '', component: WelcomeContainerComponent },
        {
          path: 'words', loadChildren: () => import('../features/words/words.module').then(m => m.WordsModule)
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
