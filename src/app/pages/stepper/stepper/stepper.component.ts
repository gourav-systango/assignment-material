import { Component, inject } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-stepper',
  standalone: false,
  templateUrl: './stepper.component.html',
  styleUrl: './stepper.component.scss'
})
export class StepperComponent {
  private _formBuilder = inject(FormBuilder);

  public firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  public secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
}
