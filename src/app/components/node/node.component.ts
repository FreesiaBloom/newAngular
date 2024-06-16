import { Component, Input } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NodeItem } from '../../interfaces/node-item.interface';

@Component({
  selector: 'app-node',
  standalone: true,
  imports: [CdkDrag],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
})
export class NodeComponent {
  @Input() public node!: NodeItem;
}
