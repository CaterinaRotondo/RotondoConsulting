import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';
import { RouterModule } from '@angular/router';

@Component({
    selector: 'app-home',
    imports: [CarouselComponent, RouterModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {
  scrollToSection(id: string) {
    const el = document.getElementById(id);
    const headerHeight = document.querySelector('header')?.clientHeight || 0;

    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - headerHeight - 24;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
}
