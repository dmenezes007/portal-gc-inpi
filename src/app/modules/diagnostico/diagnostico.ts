// DENTRO DE: src/app/modules/diagnostico/diagnostico.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/data.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-diagnostico',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './diagnostico.html', // ou .component.html
  styleUrls: ['./diagnostico.scss'] // ou .component.scss
})
export class Diagnostico implements OnInit {
  public mapeamento: any[] = [];
  public unidades: string[] = [];
  public unidadeSelecionada: string | null = null;
  public dadosFiltrados: any[] = [];

  // Configuração do Gráfico de Barras
  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: { x: {}, y: { min: 0 } },
    plugins: { legend: { display: true, position: 'top' } }
  };
  public barChartType: ChartType = 'bar';
  public barChartData: ChartData<'bar'> = {
    labels: ['Técnica', 'Tática', 'Estratégica'],
    datasets: [{ data: [0, 0, 0], label: 'Quantidade de Conhecimentos por Natureza' }]
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMapeamento().subscribe(data => {
      this.mapeamento = data;
      this.unidades = [...new Set(data.map(item => item.Unidade))].sort();
      this.filtrarDados();
    });
  }

  filtrarDados(): void {
    if (this.unidadeSelecionada) {
      this.dadosFiltrados = this.mapeamento.filter(item => item.Unidade === this.unidadeSelecionada);
    } else {
      this.dadosFiltrados = this.mapeamento;
    }
    this.atualizarGrafico();
  }

  onUnidadeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.unidadeSelecionada = target.value || null;
    this.filtrarDados();
  }

  atualizarGrafico(): void {
    const contagem = { Tecnica: 0, Tatica: 0, Estrategica: 0 };
    this.dadosFiltrados.forEach(item => {
        if (item.Natureza === 'Técnica') contagem.Tecnica++;
        if (item.Natureza === 'Tática') contagem.Tatica++;
        if (item.Natureza === 'Estratégica') contagem.Estrategica++;
    });
    this.barChartData.datasets[0].data = [contagem.Tecnica, contagem.Tatica, contagem.Estrategica];
  }
}