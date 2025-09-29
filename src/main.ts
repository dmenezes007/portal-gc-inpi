// DENTRO DE: src/main.ts (VERSÃO 100% CORRIGIDA)

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { App } from './app/app'; // NOME DA CLASSE CORRIGIDO
import { routes } from './app/app.routes';

bootstrapApplication(App, { // NOME DA CLASSE CORRIGIDO
  providers: [
    provideRouter(routes)
  ]
}).catch(err => console.error(err));