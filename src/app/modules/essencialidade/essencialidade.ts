// DENTRO DE: src/app/modules/essencialidade/essencialidade.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/data.service';

@Component({
  selector: 'app-essencialidade',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './essencialidade.html', // ou .component.html
  styleUrls: ['./essencialidade.scss'] // ou .component.scss
})
export class Essencialidade implements OnInit {
  public conhecimentosEssenciais: any[] = [];
  public topConhecimentos: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMapeamento().subscribe(data => {
      // 1. Calcula uma pontuação de essencialidade para cada conhecimento
      this.conhecimentosEssenciais = data.map(item => ({
        ...item,
        // A pontuação é a soma dos scores calculados pelo Python
        essencialidadeScore: (item.impacto || 0) + (item.risco || 0) + (item.dificuldade || 0)
      }));

      // 2. Remove duplicatas baseadas no Subtema para ter uma lista limpa
      const unicos = Array.from(new Map(this.conhecimentosEssenciais.map(item => [item['Subtema'], item])).values());


      // 3. Ordena pela maior pontuação
      unicos.sort((a, b) => b.essencialidadeScore - a.essencialidadeScore);

      // 4. Pega os 15 mais essenciais para exibir (você pode ajustar este número)
      this.topConhecimentos = unicos.slice(0, 15);
    });
  }
}