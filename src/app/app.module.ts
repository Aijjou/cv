import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { FooterComponent } from './footer/footer.component';
import { NavsideComponent } from './navside/navside.component';
import { PageComponent } from './page/page.component';
import { BlocComponent } from './bloc/bloc.component';
import { ExperienceComponent } from './page/experience/experience.component';
import { FormationComponent } from './page/formation/formation.component';
import { SkillsComponent } from './page/skills/skills.component';
import { CompetenceComponent } from './page/competence/competence.component';
import { AccueilComponent } from './accueil/accueil.component';
import { Competence1Component } from './page/competence/competence1/competence1.component';
import { Competence2Component } from './page/competence/competence2/competence2.component';
import { Competence3Component } from './page/competence/competence3/competence3.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    FooterComponent,
    NavsideComponent,
    PageComponent,
    BlocComponent,
    ExperienceComponent,
    FormationComponent,
    SkillsComponent,
    CompetenceComponent,
    AccueilComponent,
    Competence1Component,
    Competence2Component,
    Competence3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatIconModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([
      {path: 'exp', component: ExperienceComponent},
      {path: 'formation', component: FormationComponent},
      {path: 'skills', component: SkillsComponent},
      {path: 'comptence', component: SkillsComponent},
      {path: '**', redirectTo: 'list'}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
