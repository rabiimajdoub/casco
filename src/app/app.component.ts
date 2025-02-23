import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { initializeApp } from "firebase/app";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: []
})
export class AppComponent {
  title = 'casco-audit';

  firebaseConfig = {
    apiKey: "AIzaSyB7XZSzRnD5prbU-ggG0ukQRTXI4gn0jLg",
    authDomain: "casco-fc717.firebaseapp.com",
    projectId: "casco-fc717",
    storageBucket: "casco-fc717.firebasestorage.app",
    messagingSenderId: "541486763",
    appId: "1:541486763:web:5f2960fb6568cfa6b691ee"
  };
  app = initializeApp(this.firebaseConfig);
  constructor(public translateService: TranslateService) {
  }

  public toggleLanguage(): void {
    this.translateService.use(this.translateService.currentLang === 'fr' ? 'en' : 'fr');
  }


}
