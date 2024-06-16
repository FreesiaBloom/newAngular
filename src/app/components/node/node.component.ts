import { Component, Input } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NodeFormComponent } from '../node-form/node-form.component';
import { NodeItem } from '../../interfaces/node-item.interface';
import { NodeType } from '../enums/node-type.enum';
import { TypePipe } from '../../pipes/type.pipe';

@Component({
  selector: 'app-node',
  standalone: true,
  imports: [CdkDrag, NodeFormComponent, TypePipe],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
})
export class NodeComponent {
  @Input() public node!: NodeItem;
  public readonly nodeType: typeof NodeType = NodeType;
}
