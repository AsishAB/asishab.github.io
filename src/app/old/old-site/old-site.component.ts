import { CommonModule } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-old-site',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './old-site.component.html',
  styleUrl: './old-site.component.css',
  encapsulation: ViewEncapsulation.None
})
export class OldSiteComponent implements OnInit {
  totalExperience = '';
  currentYear = new Date().getFullYear();

  ngOnInit(): void {
    const company1 = new Date('2022-06-13').getTime() - new Date('2020-06-20').getTime();
    const company2 = new Date('2024-05-21').getTime() - new Date('2022-07-11').getTime();
    const company3 = Date.now() - new Date('2024-07-04').getTime();

    const totalYears = (company1 + company2 + company3) / (1000 * 60 * 60 * 24 * 365);
    this.totalExperience = `${Math.ceil(totalYears * 10) / 10} years`;
  }
}
