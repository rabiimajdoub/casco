import { Injectable } from '@angular/core';
import * as ExcelJS from 'exceljs';
import FileSaver from 'file-saver';

@Injectable({
    providedIn: 'root',
})
export class ExcelService {
    constructor() {}
    
    public generateAndDownloadExcel(data: any[], metadata: any): void {
        const columns = [
            'Élément de processus', 'Oui', 'Non', 'N/A',
            'Action corrective / commentaire', 'Date de correction', 'Responsable'
        ];

        const workbook = new ExcelJS.Workbook();
        const worksheet = workbook.addWorksheet('Checklist Audit');

        // Add headers
        worksheet.addRow(columns);
        const headerRow = worksheet.getRow(worksheet.rowCount);
        headerRow.font = { bold: true, color: { argb: 'FFFF0000' } };
        headerRow.alignment = { horizontal: 'center' };
        headerRow.eachCell((cell) => {
            cell.fill = {
                type: 'pattern',
                pattern: 'solid',
                fgColor: { argb: 'FFD3D3D3' },
            };
        });

        worksheet.columns = columns.map(column => ({
            header: column,
            key: column,
            width: 30
        }));

        // Add data rows
        data.forEach(row => {
            worksheet.addRow(row);
        });

        worksheet.eachRow(row => {
            row.height = 20;
        });

        // Generate and download Excel file
        workbook.xlsx.writeBuffer().then(buffer => {
            const blob = new Blob([buffer], {
                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
            });
            FileSaver.saveAs(blob, 'Checklist_Audit.xlsx');
        });
    }
}
