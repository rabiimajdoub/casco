import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuditLpaComponent } from './home/audit-lpa/audit-lpa.component';
import { AuditFiveSComponent } from './home/audit-five-s/audit-five-s.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'home/audit-lpa', component: AuditLpaComponent },
  { path: 'home/audit-5s', component: AuditFiveSComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
