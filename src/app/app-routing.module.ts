import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppListComponent } from './app-list/app-list.component';


const routes: Routes = [
  { path: '', redirectTo: 'app-list', pathMatch: 'full' },
  { path: 'app-list', component: AppListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
