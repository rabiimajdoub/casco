import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ExcelService } from '../../services/excel.service';
import { HeaderMap } from '../audit-lpa/audit-lpa.component';

@Component({
  selector: 'app-audit-five-s',
  templateUrl: './audit-five-s.component.html',
  styleUrl: './audit-five-s.component.css'
})
export class AuditFiveSComponent {
  
    public currentInstructionIndex: number = 1;
    public maxInstructionIndex: number = 10;
  
    public form!: FormGroup;
    public lpaResponses: string[][] = [];
  
  
    constructor(  private translateService: TranslateService, private excelService: ExcelService  ) { }
  
  
    public ngOnInit(): void {
      this.initializeForms();
    }
  
    private initializeForms(): void {
      this.form = new FormGroup({
        uap: new FormControl("uap", { validators: Validators.required }),
        auditeur: new FormControl("auditeur", { validators: Validators.required }),
        line: new FormControl("line", { validators: Validators.required }),
        supervisor: new FormControl("supervisor", { validators: Validators.required }),
        product: new FormControl("product", { validators: Validators.required }),
        comment: new FormControl(null),
        response: new FormControl(5, { validators: Validators.required }),
      })
    }
  
    public generate(): void {
      if (this.form.valid) {
        if(this.lpaResponses.length < this.maxInstructionIndex)
          this.addResponse();
        const headerMap: HeaderMap = {
          uap: this.form.get('uap')!.value as string,
          auditeur: this.form.get('auditeur')!.value as string,
          line: this.form.get('line')!.value as string,
          supervisor: this.form.get('supervisor')!.value as string,
          product: this.form.get('product')!.value as string,
          date: new Date().toLocaleDateString()
        };
        this.excelService.loadFiveSExcelFile(this.lpaResponses,headerMap);
      }
    }
  
    public resetForm(): void {
      this.form.reset();
    }

    
    nextInstruction(): void {
      if (this.currentInstructionIndex < this.maxInstructionIndex) {
  
        this.addResponse();
        
        this.form.get('response')!.setValue(5);
        this.form.get('comment')!.setValue(null);
        this.currentInstructionIndex++;
      }
    }
  
    private addResponse(): void {
      let responseRow : string[] = [];
  
      responseRow[0]=this.translateService.instant('fiveS.questions.q' + this.currentInstructionIndex);
      responseRow[1]=this.form.get('response')!.value;
      responseRow[2]=this.form.get('comment')!.value;
  
      this.lpaResponses.push(responseRow);
    }
  

}
