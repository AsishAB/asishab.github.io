import { Component } from '@angular/core';
import { Award, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-skills-and-tools',
  imports: [LucideAngularModule],
  templateUrl: './skills-and-tools.component.html',
  styleUrl: './skills-and-tools.component.css'
})
export class SkillsAndToolsComponent {
  readonly Award = Award;

}
