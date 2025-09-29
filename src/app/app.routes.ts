// DENTRO DE: src/app/app.routes.ts (VERSÃO FINAL E CORRETA)

import { Routes } from '@angular/router';

// Importe as classes com seus nomes reais
import { BoasVindas } from './modules/boas-vindas/boas-vindas';
import { Metodologia } from './modules/metodologia/metodologia';
import { EstrategiaLideranca } from './modules/estrategia-lideranca/estrategia-lideranca';
import { PessoasCultura } from './modules/pessoas-cultura/pessoas-cultura';
import { ProcessosTecnologia } from './modules/processos-tecnologia/processos-tecnologia';
import { Diagnostico } from './modules/diagnostico/diagnostico';
import { Essencialidade } from './modules/essencialidade/essencialidade';
import { Criticidade } from './modules/criticidade/criticidade';
import { Desenvolvimento } from './modules/desenvolvimento/desenvolvimento';

export const routes: Routes = [
    { path: '', redirectTo: '/boas-vindas', pathMatch: 'full' },
    { path: 'boas-vindas', component: BoasVindas },
    { path: 'metodologia', component: Metodologia },
    { path: 'estrategia-lideranca', component: EstrategiaLideranca },
    { path: 'pessoas-cultura', component: PessoasCultura },
    { path: 'processos-tecnologia', component: ProcessosTecnologia },
    { path: 'diagnostico', component: Diagnostico },
    { path: 'essencialidade', component: Essencialidade },
    { path: 'criticidade', component: Criticidade },
    { path: 'desenvolvimento', component: Desenvolvimento }
];