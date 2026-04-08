import { Component } from '@angular/core';
import { 
  LucideAngularModule, 
  Mail, 
  MapPin, 
  Linkedin, 
  Github, 
  Award, 
  Cloud, 
  Code2, 
  Database, 
  Terminal,
  Calendar,
  GraduationCap,
  ChevronRight,
  Briefcase
} from 'lucide-angular';

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
  
  readonly overallSummary = `
  Data Engineer with 5+ years of experience in AWS, Spark ETL, Snowflake, Databricks, 
  and API development, delivering scalable, cost-optimized enterprise solutions. 
  Primary Skills- AWS , Python , Terraform, NodeJS
  `;

}
