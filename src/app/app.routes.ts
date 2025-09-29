// DENTRO DE: src/app/app.routes.ts (VERSÃO FINAL CORRIGIDA)

import { Routes } from '@angular/router';

// Importe os componentes com os nomes de arquivo corretos
import { BoasVindasComponent } from './modules/boas-vindas/boas-vindas';
import { MetodologiaComponent } from './modules/metodologia/metodologia';
import { EstrategiaLiderancaComponent } from './modules/estrategia-lideranca/estrategia-lideranca';
import { PessoasCulturaComponent } from './modules/pessoas-cultura/pessoas-cultura';
import { ProcessosTecnologiaComponent } from './modules/processos-tecnologia/processos-tecnologia';
import { DiagnosticoComponent } from './modules/diagnostico/diagnostico';
import { EssencialidadeComponent } from './modules/essencialidade/essencialidade';
import { CriticidadeComponent } from './modules/criticidade/criticidade';
import { DesenvolvimentoComponent } from './modules/desenvolvimento/desenvolvimento';

export const routes: Routes = [
    { path: '', redirectTo: '/boas-vindas', pathMatch: 'full' },
    { path: 'boas-vindas', component: BoasVindasComponent },
    { path: 'metodologia', component: MetodologiaComponent },
    { path: 'estrategia-lideranca', component: EstrategiaLiderancaComponent },
    { path: 'pessoas-cultura', component: PessoasCulturaComponent },
    { path: 'processos-tecnologia', component: ProcessosTecnologiaComponent },
    { path: 'diagnostico', component: DiagnosticoComponent },
    { path: 'essencialidade', component: EssencialidadeComponent },
    { path: 'criticidade', component: CriticidadeComponent },
    { path: 'desenvolvimento', component: DesenvolvimentoComponent }
];