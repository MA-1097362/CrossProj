import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { Feature1Component } from './features/feature1/feature1.component';
import { Feature2Component } from './features/feature2/feature2.component';

import { Feature3Component } from './features/feature3/feature3.component';

export const routes: Routes = [
    {path:'', component:HomeComponent},
    {path:'errortable', component:Feature1Component},
    {path:'viewandmodifyschedule' , component:Feature2Component},
    {path:'versionsavingandcomparison' , component:Feature3Component},
    
];
