import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cloud, LucideAngularModule, Trophy } from 'lucide-angular';

import awardsList from '../../data/awards.json';

@Component({
  selector: 'app-awards',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent {
  readonly trophy  = Trophy ;
  readonly Cloud = Cloud;

  awards = awardsList.awards;

}
