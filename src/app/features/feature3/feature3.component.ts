import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MContainerComponent } from '../../m-framework/components/m-container/m-container.component';
import { PersistenceService } from '../../services/persistance.service';

@Component({
  selector: 'app-feature3',
  standalone: true,
  imports: [CommonModule, FormsModule, MContainerComponent],
  templateUrl: './feature3.component.html',
  styleUrl: './feature3.component.css'
})
export class Feature3Component{

  constructor(public persistance: PersistenceService) {}

  }
