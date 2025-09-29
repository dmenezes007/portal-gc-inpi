// DENTRO DE: src/app/app.component.ts (ou app.ts)

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html', // (ou app.html)
  styleUrls: ['./app.component.scss'] // (ou app.scss)
})
export class App { // ou AppComponent
  title = 'portal-gc-inpi';
  isSidebarCollapsed = false; // Controla o estado da sidebar

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}