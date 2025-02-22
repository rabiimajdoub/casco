import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'casco-audit';

  constructor(public translateService: TranslateService) {
  }

  public toggleLanguage(): void {
    this.translateService.use(this.translateService.currentLang === 'fr' ? 'en' : 'fr');
  }


}
