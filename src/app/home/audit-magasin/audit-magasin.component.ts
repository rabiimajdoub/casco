import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { ExcelService } from '../../services/excel.service';
import { LPAHeaderMap } from '../audit-lpa/audit-lpa.component';


@Component({
  selector: 'app-audit-magasin',
  templateUrl: './audit-magasin.component.html'
})

export class AuditMagasinComponent implements OnInit {

  public currentInstructionIndex: number = 1;
  public maxInstructionIndex: number = 17;

  public form!: FormGroup;
  public magasinResponses: string[][] = [];


  constructor(  private translateService: TranslateService, private excelService: ExcelService  ) { }


  public ngOnInit(): void {
    this.initializeForms();
  }

  private initializeForms(): void {
    this.form = new FormGroup({
      auditeur: new FormControl(null, { validators: Validators.required }),
      supervisor: new FormControl(null, { validators: Validators.required }),
      comment: new FormControl(null),
      response: new FormControl(null, { validators: Validators.required }),
    })
  }

  public generate(): void {
    if (this.form.valid) {
      if(this.magasinResponses.length < this.maxInstructionIndex)
        this.addResponse();
      const headerMap: LPAHeaderMap = {
        uap: "Magasin",
        auditeur: this.form.get('auditeur')!.value as string,
        line: "",
        supervisor: this.form.get('supervisor')!.value as string,
        product: "",
        date: new Date().toLocaleDateString()
      };
      this.excelService.loadMagasinExcelFile(this.magasinResponses,headerMap);
    }
  }

  public resetForm(): void {
    this.form.reset();
  }

  
  nextInstruction(): void {
    if (this.currentInstructionIndex < this.maxInstructionIndex) {

      this.addResponse();
      this.currentInstructionIndex++;
      if (this.magasinResponses[this.currentInstructionIndex-1])
        this.loadResponse();
      else {
        this.form.get('response')!.setValue(null);
        this.form.get('comment')!.setValue(null);
      }
    }
  }
  prevInstruction(): void {
    if (this.currentInstructionIndex > 1) {
      this.addResponse();
      this.currentInstructionIndex--;
      this.loadResponse();
    }
  }

  private loadResponse(): void {
    this.form.get('response')!.setValue(this.magasinResponses[this.currentInstructionIndex-1][1] || null);
    this.form.get('comment')!.setValue(this.magasinResponses[this.currentInstructionIndex-1][2] || null);
  }


  private addResponse(): void {
    let responseRow : string[] = [];

    responseRow[0]=this.translateService.instant('magasin.questions.q' + this.currentInstructionIndex);
    responseRow[1]=this.form.get('response')!.value;
    responseRow[2]=this.form.get('comment')!.value;
    this.magasinResponses[this.currentInstructionIndex-1] = responseRow;
  }





}
