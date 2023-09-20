import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Movie } from '../models/movie.model';
import { Observable, of } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class MoviesService {

  private moviesuRL = 'api/movies'
  comment!: object;


  constructor(private http: HttpClient, private route: ActivatedRoute,) { }

  getAll(): Observable<Movie[]>{
    return this.http.get<Movie[]>(this.moviesuRL)
  }

  getOneMovie(id: number): Observable<Movie>{
    return this.http.get<Movie>(`${this.moviesuRL}/${id}`)
  }


  search(data: string): Observable<Movie[]>{

    if(!data.trim()){
      return of([])
    }

    return this.http.get<Movie[]>(`${this.moviesuRL}?name=${data}`)
  }

  insertComment(data: object): void{
    this.comment = data
    console.log(data)
  }



}

