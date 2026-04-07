import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { 
  LucideAngularModule, 
  Code2,
  Briefcase
} from 'lucide-angular';


import projectsList from '../../data/projects.json';


@Component({
  selector: 'app-projects',
  imports: [
    CommonModule, 
    LucideAngularModule
  ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {

  readonly Code2 = Code2;

  projects = projectsList.projects;  
}
