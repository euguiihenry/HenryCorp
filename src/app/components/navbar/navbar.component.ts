import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, NgFor],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  links = [
    { path: '/home', label: 'Início' },
    { path: '/about', label: 'Sobre' },
    { path: '/henrylingos', label: 'HenryLingos' },
    { path: '/henrymistic', label: 'HenryMistic' },
    { path: '/guilhermehenrique', label: 'Guilherme Henrique' }
  ];

  constructor(private router: Router) {}
  
  getFilteredLinks() {
    if (this.router.url === '/home') {
      return this.links.filter(link => link.path === '/home' || link.path === '/about');
    }
    return this.links;
  }
}
