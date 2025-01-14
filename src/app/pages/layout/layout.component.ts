import { Component, ViewChild, ViewChildren } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@Component({
  selector: 'app-layout',
  imports: [ HeaderComponent, SidebarComponent, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss'
})
export class LayoutComponent {
  @ViewChild(SidebarComponent) sideBar!: SidebarComponent;

  openSideNav(): void {
    this.sideBar.sidenav['_animationState'] === "open"
      ? this.sideBar.close() : this.sideBar.sidenav.open();
  }
}
