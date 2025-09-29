// Dentro de src/main.ts

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes'; // Importe suas rotas

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Habilite o roteamento aqui
  ]
}).catch(err => console.error(err));