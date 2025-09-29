// DENTRO DE: src/app/app.ts (VERSÃO FINAL E CORRETA)

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.html', // (ou app.component.html)
  
  // A CORREÇÃO ESTÁ AQUI:
  styleUrls: ['./app.scss'] // (ou app.component.scss)
})
export class App { // ou AppComponent
  title = 'portal-gc-inpi';
  isSidebarCollapsed = false;

  toggleSidebar() {
    this.isSidebarCollapsed = !this.isSidebarCollapsed;
  }
}