import { Component } from '@angular/core';
import {
  LucideAngularModule,
  Award,
  Cloud,
  Code2,
  Terminal,
  GraduationCap,
  ChevronRight,
  Briefcase
} from 'lucide-angular';

import { ExperienceService } from '../services/experience.service';

@Component({
  selector: 'app-career-summary',
  imports: [LucideAngularModule],
  templateUrl: './career-summary.component.html',
  styleUrl: './career-summary.component.css'
})
export class CareerSummaryComponent {
  readonly Award = Award;
  readonly Cloud = Cloud;
  readonly Code2 = Code2;
  readonly Terminal = Terminal;
  readonly GraduationCap = GraduationCap;
  readonly ChevronRight = ChevronRight;
  readonly Briefcase = Briefcase;

  readonly totalExperienceYears: string;

  constructor(private readonly experienceService: ExperienceService) {
    const years = parseFloat(this.experienceService.getTotalExperienceYears());
    const onlyYear = Math.trunc(years); // → 5
    this.totalExperienceYears = onlyYear.toString() + "+"; // 5.1 or 5.8 -> 5+
  }

  get overallSummary(): string {
    return `
  Data Engineer with ${this.totalExperienceYears} years of experience in AWS, Spark ETL, Snowflake, Databricks,
  and API development, delivering scalable, cost-optimized enterprise solutions.
  \n
  Primary Skills- AWS , Python , Terraform, Pyspark, Snowflake, Databricks, SQL, NoSQL (MongoDB)
  \n
  Secondary Skills - NodeJS, Git, CI/CD Tools (Jenkins, Github Actions)
  `;
  }
}
