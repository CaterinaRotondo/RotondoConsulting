import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import Splide from '@splidejs/splide';

interface TemplateItem {
  id: number;
  name: string;
  description: string;
  screenshot: string;
  price: string;
  gallery: string[];
}

@Component({
    selector: 'app-templates',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './templates.component.html',
    styleUrl: './templates.component.css'
})
export class TemplatesComponent {
templates: TemplateItem[] = [
    {
      id: 1,
      name: 'Persönliches Profil',
      description: `Dieses Template präsentiert ein individuelles Profil mit Bild, kurzer Vorstellung und direkten Verlinkungen zu Social-Media-Kanälen. 
                  Der Inhalt lässt sich selbstständig personalisieren, sodass das Profil jederzeit aktualisiert werden kann.`,
      screenshot: 'assets/templates/template3/1.png',
      price: 'ab 249 €',
      gallery: [
        'assets/templates/template3/1.png',
        'assets/templates/template3/2.png',
        'assets/templates/template3/3.png'
      ]
    },
    {
      id: 2,
      name: 'Business Medium',
      description: `Unser Portfolio-Template bietet Ihnen die Möglichkeit Ihre Projekte und Arbeiten auf elegante und übersichtliche Weiße darzustellen. 
                  Persönliche Informationen und Social Media Links können selbstständig verwaltet werden. 
                  Das initiale Einpflegen Ihrer Texte und Bilder ist bereits im Preis enthalten. `,
      screenshot: 'assets/templates/template1/1.png',
      price: 'ab 449 €',
      gallery: [
        'assets/templates/template1/1.png',
        'assets/templates/template1/2.png',
        'assets/templates/template1/3.png',
        'assets/templates/template1/4.png',
        'assets/templates/template1/5.png',
        'assets/templates/template1/6.png'
      ]
    }
  ];

  selectedTemplate: TemplateItem | null = null;
  @ViewChild('modalContent') modalContent!: ElementRef;
  @ViewChild('carouselContainer') carouselContainer!: ElementRef;
  @ViewChild('descriptionRef') descriptionRef!: ElementRef;
  @ViewChild('splideRef') splideRef!: ElementRef;
  splide!: Splide;

  openDetails(template: TemplateItem) {
    document.body.classList.add('no-scroll');
    this.selectedTemplate = template;

    // Wait for modal to render in DOM
    setTimeout(() => {

      // Calculate available height for carousel
      const modalHeight = this.modalContent.nativeElement.clientHeight;
      const headerHeight = this.modalContent.nativeElement.querySelector('.modal-header').offsetHeight;
      const descriptionHeight = this.descriptionRef.nativeElement.offsetHeight;

      const availableHeight = modalHeight - headerHeight - descriptionHeight;

      // Apply explicit height in pixels
      this.carouselContainer.nativeElement.style.height = availableHeight + 'px';

      this.splide = new Splide(`#splide-${template.id}`, {
        type: 'loop',
        perPage: 1,
        autoplay: false,
        pagination: false,
        arrows: true,
        autoHeight: false,
        cover: false
      }).mount();
    }, 50);
  }

  closeDetails() {
    document.body.classList.remove('no-scroll');
    this.selectedTemplate = null;
  }
}
