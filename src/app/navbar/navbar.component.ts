import { Component, HostListener, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

// Define the structure for your navigation links (as before)
interface NavLink {
  label: string;
  path: string; 
}


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  

  scrolled: boolean = false; 

  navLinks: NavLink[] = [
    { label: 'About', path: 'about' },
    { label: 'Portfolio', path: 'portfolio' },
    { label: 'Contact', path: 'contact' },
  ];

  ngOnInit(): void {}


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 50) {
      this.scrolled = true;
    } else {
      this.scrolled = false;
    }
  }
}