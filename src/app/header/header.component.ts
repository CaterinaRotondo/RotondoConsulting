import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
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
