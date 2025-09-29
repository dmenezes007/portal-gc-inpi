// DENTRO DE: src/app/modules/desenvolvimento/desenvolvimento.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataService } from '../../core/data.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-desenvolvimento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './desenvolvimento.html', // ou .component.html
  styleUrls: ['./desenvolvimento.scss'] // ou .component.scss
})
export class Desenvolvimento implements OnInit {
  public dadosDiagnostico: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getDiagnostico().subscribe(data => {
      this.dadosDiagnostico = data;
    });
  }

  exportarParaXLSX(): void {
    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(this.dadosDiagnostico);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Diagnostico_Desenvolvimento');
    XLSX.writeFile(wb, 'Plano_de_Desenvolvimento_INPI.xlsx');
  }
}