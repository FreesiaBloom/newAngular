import { Component } from '@angular/core';
import {
  CdkDrag,
} from '@angular/cdk/drag-drop';
import { NodeItem } from '../../interfaces/node-item.interface';
import { NodeComponent } from '../node/node.component';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CdkDrag, NodeComponent],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  public nodes: NodeItem[] = [
    {title: 'install NodeJS'},
    {title: 'install Angular'}
  ];

}
