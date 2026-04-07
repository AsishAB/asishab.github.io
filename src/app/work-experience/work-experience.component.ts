import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Briefcase
} from 'lucide-angular';


import experienceList from '../../data/experience.json';
@Component({
  selector: 'app-work-experience',
  imports: [
    CommonModule, 
    LucideAngularModule
  ],
  templateUrl: './work-experience.component.html',
  styleUrl: './work-experience.component.css'
})
export class WorkExperienceComponent {
  readonly Briefcase = Briefcase;

  experiences = experienceList.experiences;

}
