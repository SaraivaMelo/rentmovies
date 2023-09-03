import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private moviesuRL = 'api/movies'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.moviesuRL)
  }
}

