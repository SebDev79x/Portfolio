import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NgxTypedJsModule } from 'ngx-typed-js';
import { NavbarComponent } from './navbar/navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ExperienceComponent } from './experience/experience.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule } from '@angular/material/expansion';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatChipsModule } from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import { TechnosComponent } from './technos/technos.component';
import { TechnoCardComponent } from './techno-card/techno-card.component';
import { SwiperModule } from 'swiper/angular';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    PortfolioComponent,
    PrivacyComponent,
    SidenavComponent,
    ExperienceComponent,
    PageNotFoundComponent,
    TechnosComponent,
    TechnoCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxTypedJsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FontAwesomeModule,
    MatExpansionModule,
    MatChipsModule,
    MatDividerModule,
    SwiperModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
