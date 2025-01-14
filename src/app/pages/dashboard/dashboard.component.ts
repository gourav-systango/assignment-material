import { Component } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { StepperModule } from '../stepper/stepper.module';

@Component({
  selector: 'app-dashboard',
  imports: [MatGridListModule, StepperModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
