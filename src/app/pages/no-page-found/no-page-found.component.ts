import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-page-found',
  imports: [MatGridListModule, MatButtonModule, MatIconModule],
  templateUrl: './no-page-found.component.html',
  styleUrl: './no-page-found.component.scss'
})
export class NoPageFoundComponent {

  constructor(private router: Router) {}

  public navigateUrl(): void {
    this.router.navigateByUrl("/");
  }

}
