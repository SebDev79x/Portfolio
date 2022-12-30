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
import { XpComponent } from './xp/xp.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ProjectsComponent } from './projects/projects.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MatExpansionModule } from '@angular/material/expansion';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { TechnosComponent } from './technos/technos.component';
import { TechnoCardComponent } from './techno-card/techno-card.component';
import { SwiperModule } from 'swiper/angular';
import { FlipCardModule } from '../modules/flipcard.module';
import { TitleModule } from '../modules/title.module';
import { HttpClientModule } from '@angular/common/http';
import { WorkInProgressComponent } from './work-in-progress/work-in-progress.component';
@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    ContactComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    XpComponent,
    PrivacyComponent,
    SidenavComponent,
    ProjectsComponent,
    PageNotFoundComponent,
    TechnosComponent,
    TechnoCardComponent,
    WorkInProgressComponent,
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
    SwiperModule,
    FlipCardModule,
    TitleModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
