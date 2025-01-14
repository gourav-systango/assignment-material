import { Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FormsComponent } from './pages/forms/forms.component';
import { NoPageFoundComponent } from './pages/no-page-found/no-page-found.component';
import { CardsComponent } from './pages/cards/cards.component';
import { StepperComponent } from './pages/stepper/stepper/stepper.component';

export const routes: Routes = [
  {
      path: "",
      component: LayoutComponent,
      children: [ 
        { path: "dashboard", component: DashboardComponent },
        { path: "forms", component: FormsComponent },
        { path: "cards", component: CardsComponent },
        { path: "stepper", component: StepperComponent },
        { path: "", redirectTo: "dashboard", pathMatch: "full"}
       ]
    },
    {path: "**", component: NoPageFoundComponent }
];
