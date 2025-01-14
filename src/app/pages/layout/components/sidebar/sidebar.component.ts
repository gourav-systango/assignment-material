import { Component, ViewChild } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { SIDE_MENU } from './constants/side-menu.constant';
import { MatTreeModule } from '@angular/material/tree';
import { SideMenu } from './models/side-menu.interface';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [ MatButtonModule, MatIconModule, MatSidenavModule, MatTreeModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  public menu: SideMenu[] = SIDE_MENU;
  
  constructor(private router: Router) {}

  childrenAccessor = (node: SideMenu) => node.children ?? [];

  hasChild = (_: number, node: SideMenu) => !!node.children && node.children.length > 0;

  public close(): void { this.sidenav.close(); }

  public navigateByUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

}
