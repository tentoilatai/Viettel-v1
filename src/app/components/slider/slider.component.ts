import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate } from '@angular/animations';

interface Slide {
  image: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: 'slider.component.html', // Added quotes
  styleUrls: ['slider.component.css'],   // Added quotes
  
  animations: [
    trigger('slideAnimation', [
      transition('inactive => active', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms ease-out', style({ transform: 'translateX(0)', opacity: 1 }))
      ]),
      transition('active => inactive', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('500ms ease-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ]
})
export class SliderComponent implements OnInit, OnDestroy {
  slides: Slide[] = [
    {
      image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Kết nối không giới hạn',
      description: 'Trải nghiệm internet tốc độ cao với các gói cước đa dạng của Viettel'
    },
    {
      image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Tiết kiệm chi phí',
      description: 'Nhiều ưu đãi hấp dẫn với các gói cước phù hợp mọi nhu cầu sử dụng'
    },
    {
      image: 'https://images.pexels.com/photos/3183156/pexels-photo-3183156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      title: 'Tốc độ 5G',
      description: 'Trải nghiệm công nghệ mạng di động thế hệ mới với tốc độ vượt trội'
    }
  ];

  currentSlide = 0;
  slideInterval: any;

  ngOnInit() {
    this.startSlideShow();
  }

  ngOnDestroy() {
    this.stopSlideShow();
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000);
  }

  stopSlideShow() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentSlide = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }
}