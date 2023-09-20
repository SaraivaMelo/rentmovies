import { Movie } from './../../../core/models/movie.model';
import { Component, Input, OnInit, EventEmitter, Output  } from '@angular/core';
import { FormsModule, Validators } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable, Subject, switchMap } from 'rxjs';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent implements OnInit {

  movies$!: Observable<Movie[]>


  @Input() label = '';

  @Output() private selected = new EventEmitter<Movie>();


  private dataTerm = new Subject<string>();


  constructor(
    private moviesService: MoviesService,
    // private fb: FormsModule
    ){}


  ngOnInit(): void {
    this.movies$ = this.dataTerm.pipe(
      switchMap(data => this.moviesService.search(data))
    )
  }

  onSelected(selectedItem: MatAutocompleteSelectedEvent): void{

    const movie: Movie = selectedItem.option.value
    this.selected.emit(movie)

  }

  getSearch(data: string): void{
    this.dataTerm.next(data);
  }
}
