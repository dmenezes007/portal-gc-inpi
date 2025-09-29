// DENTRO DE: src/main.ts (VERSÃO FINAL E CORRETA)

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app'; // MUDANÇA AQUI
import { routes } from './app/app.routes';

bootstrapApplication(App, { // E MUDANÇA AQUI
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));