import { Injectable } from '@angular/core';

import experienceList from '../../data/experience.json';

@Injectable({
  providedIn: 'root'
})
export class ExperienceService {
  private readonly experiences: Array<{ startDate: string; endDate?: string }> = (experienceList.experiences as Array<{ startDate?: string; endDate?: string }> || [])
    .filter((experience) => Boolean(experience.startDate))
    .map((experience) => ({
      startDate: experience.startDate as string,
      endDate: experience.endDate
    }));

  getTotalExperienceYears(): string {
    if (this.experiences.length === 0) {
      return '0';
    }

    const calculateDiff = (start: string, end?: string) => {
      const startDate = new Date(start);
      const endDate = end ? new Date(end) : new Date();
      return endDate.getTime() - startDate.getTime();
    };

    const totalMs = this.experiences.reduce((acc, exp) => acc + calculateDiff(exp.startDate, exp.endDate), 0);
    const totalYears = totalMs / (1000 * 60 * 60 * 24 * 365.25);

    return totalYears.toFixed(1);
  }
}
