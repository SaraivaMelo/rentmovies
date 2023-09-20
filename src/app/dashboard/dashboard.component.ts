import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../core/services/movies.service';
import { Movie } from '../core/models/movie.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements  OnInit {

  movies: Movie[] = []

  constructor(
    private moviesService: MoviesService,
    private router: Router
    ){}

  ngOnInit(): void {
    this.getMovies()
  }

  getMovies(): void {
    this.moviesService.getAll().subscribe(
      (movies)=> {this.movies = movies})
  }


  // click(movie: Movie): void{
  //   this.router.navigate(['/movie', movie.id])
  // }
}
