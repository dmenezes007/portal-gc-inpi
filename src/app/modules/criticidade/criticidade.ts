// DENTRO DE: src/app/modules/criticidade/criticidade.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/data.service';
import { BaseChartDirective } from 'ng2-charts';
import { ChartConfiguration, ChartType } from 'chart.js';

@Component({
  selector: 'app-criticidade',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  templateUrl: './criticidade.html', // ou .component.html
  styleUrls: ['./criticidade.scss'] // ou .component.scss
})
export class Criticidade implements OnInit {
  // Configuração do Gráfico de Bolhas
  public bubbleChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: { title: { display: true, text: 'Impacto Estratégico' }, min: 0, max: 11 },
      y: { title: { display: true, text: 'Risco de Perda (Concentração)' }, min: 0, max: 11 }
    }
  };
  public bubbleChartType: ChartType = 'bubble';
  public bubbleChartData: ChartConfiguration['data'] = {
    labels: [],
    datasets: [{
      data: [],
      label: 'Criticidade do Conhecimento',
      backgroundColor: 'rgba(255, 0, 0, 0.5)',
      borderColor: 'red',
      hoverBackgroundColor: 'rgba(255, 0, 0, 1)',
      hoverBorderColor: 'red',
    }]
  };

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getMapeamento().subscribe(data => {
      const chartData = data.map(item => ({
        x: item.impacto,
        y: item.risco,
        r: item.dificuldade * 2, // Multiplicador para bolha ficar mais visível
        label: item.Subtema // Tooltip
      }));
      this.bubbleChartData.datasets[0].data = chartData;
    });
  }
}