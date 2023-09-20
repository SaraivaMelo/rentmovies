import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesDetailsComponent } from './components/movies-details/movies-details.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';



@NgModule({
  declarations: [MoviesDetailsComponent],
  imports: [CommonModule, RouterModule, ReactiveFormsModule, MaterialModule]
})
export class MoviesModule { }
