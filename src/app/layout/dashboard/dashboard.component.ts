import { Component } from '@angular/core';
import { GridComponent } from '../grid/grid.component';
import { MainPageComponent } from '../../components/main-page/main-page.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [GridComponent, MainPageComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
