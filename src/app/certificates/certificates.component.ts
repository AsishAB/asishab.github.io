import { Component } from '@angular/core';
import { BookCheck, LucideAngularModule, NotebookPen } from 'lucide-angular';

@Component({
  selector: 'app-certificates',
  imports: [LucideAngularModule],
  templateUrl: './certificates.component.html',
  styleUrl: './certificates.component.css'
})
export class CertificatesComponent {
  readonly bookCheck  = BookCheck;
  readonly notebookPen  = NotebookPen ;
}
