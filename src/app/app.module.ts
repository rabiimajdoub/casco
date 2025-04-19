import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { TranslateModule, TranslateService } from '@ngx-translate/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuditLpaComponent } from './home/audit-lpa/audit-lpa.component';
import { AuditFiveSComponent } from './home/audit-five-s/audit-five-s.component';
import { HomeComponent } from './home/home.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';
import { StarRatingModule } from 'angular-star-rating';
import {MatSelectModule} from '@angular/material/select';


import { translationEn } from '../assets/i18n/translation-en';
import { translationFr } from '../assets/i18n/translation-fr';
import { HttpClientModule } from '@angular/common/http';
import { NearMissComponent } from './home/near-miss/near-miss.component';
import { AuditMagasinComponent } from './home/audit-magasin/audit-magasin.component';

@NgModule({
  declarations: [
    AppComponent,
    AuditLpaComponent,
    AuditFiveSComponent,
    HomeComponent,
    NearMissComponent,
    AuditMagasinComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule,
    HttpClientModule,
    MatSelectModule,
    StarRatingModule.forRoot(),
    TranslateModule.forRoot({
      defaultLanguage: 'fr',
    })
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(translate: TranslateService) {
    translate.setTranslation('en', translationEn, true);
    translate.setTranslation('fr', translationFr, true);
  }
 }
