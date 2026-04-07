import { Component } from '@angular/core';
import { GraduationCap, LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-education',
  imports: [LucideAngularModule],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent {
  readonly GraduationCap = GraduationCap;
}
