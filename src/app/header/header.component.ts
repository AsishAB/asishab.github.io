import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Mail, 
  MapPin, 
  Award, 
  Cloud, 
  Code2, 
  Terminal,
  GraduationCap,
  ChevronRight,
  Briefcase
} from 'lucide-angular';

@Component({
  selector: 'app-header',
  imports: [LucideAngularModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent {
  readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Award = Award;
  readonly Cloud = Cloud;
  readonly Code2 = Code2;
  readonly Terminal = Terminal;
  readonly GraduationCap = GraduationCap;
  readonly ChevronRight = ChevronRight;
  readonly Briefcase = Briefcase;

  // Calculating total experience based on the experiences array
  totalExperience: string = '0';
  experiences = [
    // Infosys
    {
      startDate: "2024-07-04"
    },
    // TCS
    {
      startDate: "2022-07-11",
      endDate: "2024-05-21",
    },
    // Nirmalya Labs
    {
      startDate: "2020-06-20",
      endDate: "2022-06-13",
    }
  ]
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

