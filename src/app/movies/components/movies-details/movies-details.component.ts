import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { AddCommentDialogComponent } from 'src/app/core/components/add-comment-dialog/add-comment-dialog.component';
import { Movie } from 'src/app/core/models/movie.model';
import { MoviesService } from 'src/app/core/services/movies.service';

@Component({
  selector: 'app-movies-details',
  templateUrl: './movies-details.component.html',
  styleUrls: ['./movies-details.component.css']
})
export class MoviesDetailsComponent  implements OnInit{

  movie!: Movie;
  comment!: object;
  confirmText: string = 'Confirmar'

  constructor(
    private moviesService: MoviesService,
    private location: Location,
    private route: ActivatedRoute,
    public dialog: MatDialog
  ){}


  ngOnInit(): void {
    this.getMovie()
  }

  getMovie(): void{
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.moviesService.getOneMovie(id).subscribe( (movie) => { this.movie = movie})

  }

  goBack(): void{
    this.location.back()
  }

  openDialog(): void{

      const dialogComent = this.dialog.open( AddCommentDialogComponent, {
        data: {content: this.comment},
      });

      dialogComent.afterClosed().subscribe( result => {
        this.moviesService.insertComment(result)
        this.comment = {}
      })

    }
}
