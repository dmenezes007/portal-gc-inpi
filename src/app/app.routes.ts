// DENTRO DE: src/app/app.routes.ts (VERSÃO CORRIGIDA)

import { Routes } from '@angular/router';

// Importe os componentes que você já criou
import { BoasVindasComponent } from './modules/boas-vindas/boas-vindas.component';
import { MetodologiaComponent } from './modules/metodologia/metodologia.component';
import { EstrategiaLiderancaComponent } from './modules/estrategia-lideranca/estrategia-lideranca.component';
import { PessoasCulturaComponent } from './modules/pessoas-cultura/pessoas-cultura.component';
import { ProcessosTecnologiaComponent } from './modules/processos-tecnologia/processos-tecnologia.component';
import { DiagnosticoComponent } from './modules/diagnostico/diagnostico.component';
import { EssencialidadeComponent } from './modules/essencialidade/essencialidade.component';
import { CriticidadeComponent } from './modules/criticidade/criticidade.component';
import { DesenvolvimentoComponent } from './modules/desenvolvimento/desenvolvimento.component';

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