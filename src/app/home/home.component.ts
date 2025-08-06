import { Component, ElementRef, ViewChild } from '@angular/core';
import { CarouselComponent } from '../carousel/carousel.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ CarouselComponent ],
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
