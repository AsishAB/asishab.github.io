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

  // Normalize experience entries so template can rely on `techStacks`
  experiences: any[] = (experienceList.experiences as any[]).map(exp => ({
    ...exp,
    techStacks: (exp as any).techStacks ?? (exp as any).cloudServices ?? []
  }));

}
