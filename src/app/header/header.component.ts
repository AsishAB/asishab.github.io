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

import { ExperienceService } from '../services/experience.service';

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

  totalExperience: string = '0';

  constructor(private readonly experienceService: ExperienceService) {}

  ngOnInit() {
    this.totalExperience = this.experienceService.getTotalExperienceYears();
  }
}

