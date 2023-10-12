import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';
import { EnregistremenComponent } from './enregistrement/enregistrement.component';
import { InnerHomeComponent } from './inner-home/inner-home.component';

const routes: Routes = [
  { path: 'authentification', component: AuthentificationComponent },
  { path: 'signup', component: EnregistremenComponent },
  { path: 'home', component: InnerHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
