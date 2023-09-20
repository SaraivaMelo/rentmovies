import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SlideModel } from '../../models/slider.model';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent  implements OnInit{

  @Input() slides: SlideModel[] = [];

  currentIndex:  number = 0;
  timeoutId?: number;

    ngOnInit(): void {
      this.resetTimer()
    }


    goToPrevious(){
      const isFirstSlide = this.currentIndex === 0

      const newIndex = isFirstSlide ? this.slides.length -1 : this.currentIndex - 1

      this.currentIndex = newIndex
    }


    goToNext(){
      const isLastSlide = this.currentIndex === this.slides.length - 1
      const newIndex = isLastSlide ? 0 : this.currentIndex + 1

      this.currentIndex = newIndex;
    }

    getCurrentSlideUrl(): string{
        return `url('${this.slides[this.currentIndex].url})`;
    }


    resetTimer() {
      if (this.timeoutId) {
        window.clearTimeout(this.timeoutId);
      }

      this.timeoutId = window.setInterval(() => this.goToNext(), 3000);
    }

}
