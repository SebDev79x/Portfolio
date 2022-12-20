import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ExperienceComponent } from './experience/experience.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TechnosComponent } from './technos/technos.component';
import { FlipcardComponent } from './flipcard/flipcard.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'experience', component: ExperienceComponent
  },
  {
    path: 'portfolio', component: PortfolioComponent
  },
  {
    path: 'technos', component: TechnosComponent
  },
  {
    path: 'contact', component: ContactComponent
  },
  {
    path: 'privacy', component: PrivacyComponent
  },
  {
    path: 'flipcard', component:FlipcardComponent
  },
  {
    path: '**', component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

