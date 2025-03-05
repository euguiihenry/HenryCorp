import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [NavbarComponent, RouterLink, RouterLinkActive, NgClass],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  
  constructor(private router: Router) {}

  setClassNames() {
    const classOutsideHome = 'flex flex-row gap-[1rem] justify-between items-center p-[2rem]';
    const classInsideHome = 'flex flex-row gap-[1rem] justify-center items-center p-[2rem] pt-[5rem]';

    if (this.router.url === '/home') {
      return classInsideHome;
    } else {
      return classOutsideHome;
    }
  }
}
