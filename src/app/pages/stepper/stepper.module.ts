import { NgModule } from '@angular/core';
import { StepperComponent } from './stepper/stepper.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { StepperVerticalComponent } from './components/stepper-vertical/stepper-vertical.component';



@NgModule({
  declarations: [StepperComponent],
  imports: [
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    StepperVerticalComponent
  ],
  exports: [StepperComponent]
})
export class StepperModule { }
