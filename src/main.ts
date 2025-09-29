// DENTRO DE: src/main.ts (VERSÃO FINAL CORRIGIDA)

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app'; // Caminho corrigido
import { routes } from './app/app.routes';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));