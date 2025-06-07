import { Component } from '@angular/core';
import { MContainerComponent } from '../../m-framework/components/m-container/m-container.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 
import { MCardComponent } from '../../m-framework/components/m-card/m-card.component';
import { MMainMenuComponent } from "../../m-framework/components/m-main-menu/m-main-menu.component";
import { MLoginComponent } from "../../m-framework/components/m-login/m-login.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, MContainerComponent, MCardComponent, MMainMenuComponent, MLoginComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  
  constructor(public router: Router)
  {
    
  }
  goToFeature2(){
    this.router.navigateByUrl("/feature2");
  }
    goToFeature3(){
    this.router.navigateByUrl("/feature3");
  }
}