import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';
import FileSaver from 'file-saver';
import { HeaderMap } from '../home/audit-lpa/audit-lpa.component';

@Injectable({
    providedIn: 'root',
})
export class ExcelService {
    constructor(private http: HttpClient) {}
    
    
    loadLPAExcelFile(lpaData: string[][], headerData: HeaderMap): void {
        this.http.get('assets/excel/lpa.xlsx', { responseType: 'arraybuffer' })
        .subscribe((data) => {
            this.updateLPAExcelFile(data, lpaData, headerData);
        });
    }
  
    updateLPAExcelFile(fileData: ArrayBuffer, lpaData: string[][], headerData: HeaderMap): void {
        const workbook = new ExcelJS.Workbook();
        workbook.xlsx.load(fileData).then(() => {
            const worksheet = workbook.getWorksheet(2)!;

            worksheet.getCell('E5').value = headerData.uap;
            worksheet.getCell('E6').value = headerData.line;
            worksheet.getCell('E8').value = headerData.product;
            worksheet.getCell('Q5').value = headerData.date;
            worksheet.getCell('Q6').value = headerData.auditeur;
            worksheet.getCell('Q8').value = headerData.supervisor;

            lpaData.forEach((row, rowIndex) => {
                if (row[1] == "oui") worksheet.getCell(`Q${rowIndex + 12}`).value = "X";
                if (row[1] == "non") worksheet.getCell(`S${rowIndex + 12}`).value = "X"; 
                if (row[1] == "na") worksheet.getCell(`U${rowIndex + 12}`).value = "X"; 
                worksheet.getCell(`V${rowIndex + 12}`).value = row[2];
            });

            const fileName ='Checklist Layred Audit Process.xlsx';

            this.saveExcelFile(workbook,fileName); 
        });
    }

    loadFiveSExcelFile(lpaData: string[][], headerData: HeaderMap): void {
        this.http.get('assets/excel/fiveS.xlsx', { responseType: 'arraybuffer' })
        .subscribe((data) => {
            this.updateFiveSExcelFile(data, lpaData, headerData);
        });
    }
  
    updateFiveSExcelFile(fileData: ArrayBuffer, lpaData: string[][], headerData: HeaderMap): void {
        const workbook = new ExcelJS.Workbook();
        workbook.xlsx.load(fileData).then(() => {
            const worksheet = workbook.getWorksheet(2)!;

            worksheet.getCell('E5').value = headerData.uap;
            worksheet.getCell('E6').value = headerData.line;
            worksheet.getCell('E8').value = headerData.product;
            worksheet.getCell('Q5').value = headerData.date;
            worksheet.getCell('Q6').value = headerData.auditeur;
            worksheet.getCell('Q8').value = headerData.supervisor;
            let totaleScore = 0;
            lpaData.forEach((row, rowIndex) => {
                worksheet.getCell(`O${rowIndex + 12}`).value = row[1];
                worksheet.getCell(`S${rowIndex + 12}`).value = row[2];
                totaleScore += Number(row[1]);
            });

            worksheet.getCell('AK22').value = Math.round((totaleScore / 50) * 100) + '%';

            const fileName ='Checklist Five S.xlsx';

            this.saveExcelFile(workbook,fileName); 
        });
    }
    
    saveExcelFile(workbook: ExcelJS.Workbook, fileName: string): void {
        workbook.xlsx.writeBuffer().then((buffer) => {
        const blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = fileName;
        link.click();
        });
    }
}
