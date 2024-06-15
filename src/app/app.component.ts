import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';

const components: any[] = [DashboardComponent, NavbarComponent];

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ...components],
  templateUrl: './app.component.html',
})
export class AppComponent {}
