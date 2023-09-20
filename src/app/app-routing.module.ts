import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviesDetailsComponent } from './movies/components/movies-details/movies-details.component';


const routes : Routes = [
  { path: 'dashboard', component: DashboardComponent},
  { path: 'movie/:id', component: MoviesDetailsComponent }

]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
