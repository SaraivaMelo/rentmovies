import { Component, OnInit } from '@angular/core';
import { Movie } from './core/models/movie.model';
import { Router } from '@angular/router';
import { SlideModel } from './core/models/slider.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Movies';

  ngOnInit(): void {

  }

  constructor(private router: Router){}

  onSelected(movie: Movie): void{
    this.router.navigate(['/movie', movie.id])
  }

  slides: SlideModel[] = [
    { url: '../../../../assets/img/antesQ.jpg' },
    { url: '../../../../assets/img/simplesmente.jpg' },
    { url: '../../../../assets/img/badboys.jpg' },
    { url: '../../../../assets/img/sempre.png' },
    { url: '../../../../assets/img/dearJohn.jpg' },
    { url: '../../../../assets/img/souLouco.jpg' },
    { url: '../../../../assets/img/paixao.png' },
  ]

}
