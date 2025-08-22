import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    imports: [RouterModule, FontAwesomeModule],
    templateUrl: './header.component.html',
    styleUrl: './header.component.css'
})
export class HeaderComponent {
  faInstagram = faInstagram;
  faEnvelope = faEnvelope;
  faPhone = faPhone;

  constructor(private router: Router) {}

  onLogoClick(event: MouseEvent): void {
    const isOnRoot = this.router.url === '/';

    if (isOnRoot) {
      event.preventDefault(); // prevent redundant navigation
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // otherwise routerLink will navigate as usual
  }
}
