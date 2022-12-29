import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { XpComponent } from './xp/xp.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { ProjectsComponent } from './projects/projects.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TechnosComponent } from './technos/technos.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: HomeComponent,
  },
  {
    path: 'projects', component:ProjectsComponent,
  },
  {
    path: 'xp', component:XpComponent,
  },
  {
    path: 'technos', component: TechnosComponent,
  },
  {
    path: 'contact', component: ContactComponent,
  },
  {
    path: 'privacy', component: PrivacyComponent,
  },
  {
    path: '**', component: PageNotFoundComponent,
  }
];
// {enableTracing:true} => will log all nav events that will be triggered when nav from route to another one
@NgModule({
  imports: [RouterModule.forRoot(routes,/* {enableTracing:true} */)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

