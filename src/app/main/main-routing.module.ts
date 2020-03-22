import { Routes, RouterModule } from '@angular/router';
import { StartComponent } from './start/start.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '', component: StartComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
