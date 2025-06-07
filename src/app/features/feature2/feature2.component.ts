import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MContainerComponent } from '../../m-framework/components/m-container/m-container.component';
import { Section } from '../../data/Section';
import { MCardComponent } from '../../m-framework/components/m-card/m-card.component';
import { PersistenceService } from '../../services/persistance.service';

@Component({
  selector: 'app-feature2',
  standalone: true,
  imports: [CommonModule, FormsModule, MContainerComponent,MCardComponent],
  templateUrl: './feature2.component.html',
  styleUrl: './feature2.component.css'
})
export class Feature2Component {
  section: Section;
  timeSlots: string[] = [ // pre defined timings for sections
    "MW 9:00-10:45",
    "MW 10:55 - 12:40",
    "MW 12:50 - 14:35",
    "MW 15:00 - 16:45",
    "MW 16:55 - 18:40",
    "MW 18:50 - 20:35",
    "MW 20:45 - 22:30",
    "TR 9:00 - 10:45",
    "TR 10:55 - 12:40",
    "TR 12:50 - 14:35",
    "TR 15:00 - 16:45",
    "TR 16:55 - 18:40",
    "TR 18:50 - 20:35",
    "TR 20:45 - 22:30"
  ];
  abuDhabiSections: { [timeSlot: string]: Section | null } = {};
  alAinSections: { [timeSlot: string]: Section | null } = {};
  instructors: string[] = ["Dr. Ghazal", "Dr. Khiati", "Dr. Deif", "Dr. Awad"];


  constructor(public persistence:PersistenceService) {
    this.section = new Section("", 0, "", "", "", "");
    this.timeSlots.forEach(slot => {
    this.abuDhabiSections[slot] = null;
    this.alAinSections[slot] = null;
  
    });
  }

  
  resetState() {
    this.section = new Section("", 0, "", "", "", "");
  }

  // Register section into either abu dhabi or al ain and alert success
  registerSection(form: any, type: string) {
    let section: Section = new Section(
      this.section.name,
      this.section.sectionNumber,
      this.section.capacity,
      this.section.timeSlot,
      this.section.campus,
      this.section.instructor
    )
      
    ;

    if (section.campus == "Abu Dhabi") {
      this.abuDhabiSections[section.timeSlot] = section;
    } else {
      this.alAinSections[section.timeSlot] = section;
    }
    this.persistence.add(section,type);
    this.resetState();
    form.resetForm();
    alert("Successfully added section.");
  }
  // Delete section for feature 2
  deleteSection(timeSlot: string, campus: string,type:string) {
    if (campus == "Abu Dhabi") {
      this.abuDhabiSections[timeSlot] = null;
    } else if (campus === "Al Ain") {
      this.alAinSections[timeSlot] = null;
    }
    this.persistence.remove(timeSlot,'remote');
  }

  // Get remote list for feature 2
  get remoteListOfSections(){
    return this.persistence.getRemoteList();
  }

  // Check each instructor's section count for feature 3
  getInstructorSectionCounts(): { [instructor: string]: number } {
    let counts: { [instructor: string]: number } = {};
  
    // Initialize each instructor's count to 0
    for (let i = 0; i < this.instructors.length; i++) {
      let name = this.instructors[i];
      counts[name] = 0;
    }
  
    // Count sections in abu dhabi
    let abuKeys = Object.keys(this.abuDhabiSections);
    for (let i = 0; i < abuKeys.length; i++) {
      let key = abuKeys[i];
      let section = this.abuDhabiSections[key];
      if (section != null && counts.hasOwnProperty(section.instructor)) {
        counts[section.instructor] = counts[section.instructor] + 1;
      }
    }
  
    // Count sections in al ain
    let alAinKeys = Object.keys(this.alAinSections);
    for (let i = 0; i < alAinKeys.length; i++) {
      let key = alAinKeys[i];
      let section = this.alAinSections[key];
      if (section != null && counts.hasOwnProperty(section.instructor)) {
        counts[section.instructor] = counts[section.instructor] + 1;
      }
    }
  
    return counts;
  }
  
  // Return color based on calculated load.
  getInstructorRowColor(load: number): string {
    if (load < 4) 
      return 'green';
    else if (load == 4) 
      return 'yellow';
    else 
      return 'red';
  }
}
