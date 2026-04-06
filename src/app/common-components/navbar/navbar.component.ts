import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
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
  selector: 'app-navbar',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
    readonly Mail = Mail;
  readonly MapPin = MapPin;
  readonly Linkedin = Linkedin;
  readonly Github = Github;
  readonly Award = Award;
  readonly Cloud = Cloud;
  readonly Code2 = Code2;
  readonly Database = Database;
  readonly Terminal = Terminal;
  readonly Calendar = Calendar;
  readonly GraduationCap = GraduationCap;
  readonly ChevronRight = ChevronRight;
  readonly Briefcase = Briefcase;
}
