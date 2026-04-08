import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Award, 
  Cloud, 
  GraduationCap,
  
} from 'lucide-angular';

import { NavbarComponent } from "../common-components/navbar/navbar.component";
import { FooterComponent } from "../common-components/footer/footer.component";
import { HeaderComponent } from '../header/header.component';
import { CareerSummaryComponent } from "../career-summary/career-summary.component";
import { ProjectsComponent } from "../projects/projects.component";
import { WorkExperienceComponent } from "../work-experience/work-experience.component";
import { SkillsAndToolsComponent } from "../skills-and-tools/skills-and-tools.component";
import { EducationComponent } from "../education/education.component";
import { CertificatesComponent } from "../certificates/certificates.component";
import { AwardsComponent } from "../awards/awards.component";

import experienceData from '../../data/experience.json';

@Component({
  selector: 'app-home',
    imports: [
    CommonModule,
    LucideAngularModule,
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    CareerSummaryComponent,
    ProjectsComponent,
    WorkExperienceComponent,
    SkillsAndToolsComponent,
    EducationComponent,
    CertificatesComponent,
    AwardsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  readonly Award = Award;
  readonly Cloud = Cloud;
  


  
  totalExperience: string = '0';
  experiences = experienceData.experiences;

  ngOnInit() {
    this.calculateTotalExperience();
  }

  calculateTotalExperience() {
    const calculateDiff = (start: string, end?: string) => {
      const startDate = new Date(start);
      const endDate = end ? new Date(end) : new Date();
      return endDate.getTime() - startDate.getTime();
    };

    const totalMs = this.experiences.reduce((acc, exp) => acc + calculateDiff(exp.startDate, exp.endDate), 0);
    const totalYears = totalMs / (1000 * 60 * 60 * 24 * 365.25);
    this.totalExperience = totalYears.toFixed(1);
  }
}
