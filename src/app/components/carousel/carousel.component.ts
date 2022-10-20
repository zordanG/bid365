import { Component, Input, OnInit } from '@angular/core';
import { CarouselImage } from 'src/app/models/CarouselImage.model';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
  @Input() images: CarouselImage[] = [];
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = true;
  @Input() slideInterval = 3000;

  selectedIndex = 0;

  constructor() {
    if(this.autoSlide){
      this.autoSlideImages();
    }
  }

  ngOnInit(): void {
  }

  autoSlideImages(): void {
    setInterval(() => {
      this.onNextClick();
    }, this.slideInterval);
  }

  selectImage(i: number): void {
    this.selectedIndex = i;
  }

  onPrevClick(): void {
    if(this.selectedIndex == 0){
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex == (this.images.length - 1)){
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }

}
