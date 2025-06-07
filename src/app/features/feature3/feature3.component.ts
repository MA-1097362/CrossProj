import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MContainerComponent } from '../../m-framework/components/m-container/m-container.component';
import { PersistenceService } from '../../services/persistance.service';
import { MCardComponent } from "../../m-framework/components/m-card/m-card.component";
import { Schedule } from '../../data/Schedule';
import { Section } from '../../data/Section';

@Component({
  selector: 'app-feature3',
  standalone: true,
  imports: [CommonModule, FormsModule, MContainerComponent, MCardComponent],
  templateUrl: './feature3.component.html',
  styleUrl: './feature3.component.css'
})
export class Feature3Component{


  constructor(public persistance: PersistenceService) {

  }


  }
