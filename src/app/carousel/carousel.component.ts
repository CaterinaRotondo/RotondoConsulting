import { Component, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';

@Component({
    selector: 'app-carousel',
    imports: [CommonModule],
    templateUrl: './carousel.component.html',
    styleUrl: './carousel.component.css'
})
export class CarouselComponent implements AfterViewInit {
  projects = [
    {
      image: 'assets/ha-consult.png',
      title: 'ha consult',
      link: 'https://ha-consult.de/'
    } /*,
    {
      image: 'assets/computer.png',
      title: 'Projekt 2',
      link: 'https://example2.com'
    },
    {
      image: 'assets/computer.png',
      title: 'Projekt 3',
      link: 'https://example2.com'
    },
    {
      image: 'assets/computer.png',
      title: 'Projekt 4',
      link: 'https://example2.com'
    }*/
  ];

  ngAfterViewInit(): void {
    const totalSlides = this.projects.length;
    const perPageDefault = 3;

    const loopEnabled = totalSlides > perPageDefault;

    new Splide('#carousel', {
      type: loopEnabled ? 'loop' : 'slide',
      perPage: totalSlides > perPageDefault ? perPageDefault : totalSlides,
      perMove: 1,
      breakpoints: {
        1600: { perPage: totalSlides > 2 ? 2 : totalSlides },
        920: { perPage: 1}
        /* 768: { perPage: 1 } */
      },
      gap: '1rem',
      arrows: loopEnabled,
      pagination: false,
    }).mount();
  }
}
