import { Component, inject, Input } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { NodeFormComponent } from '../node-form/node-form.component';
import { NodeItem } from '../../interfaces/node-item.interface';
import { NodeType } from '../../enums/node-type.enum';
import { TypePipe } from '../../pipes/type.pipe';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { ClearSelection, DeselectNode, NodeState, SelectNode } from '../../store/node.state';


@Component({
  selector: 'app-node',
  standalone: true,
  imports: [CdkDrag, NodeFormComponent, MatButtonModule, MatIconModule, TypePipe],
  templateUrl: './node.component.html',
  styleUrl: './node.component.scss',
})
export class NodeComponent {
  @Input() public node!: NodeItem;

  public selectedNodes$: Observable<NodeItem[]> = inject(Store).select(
    NodeState.getSelectedNodes
  );

  public readonly nodeType: typeof NodeType = NodeType;

  constructor(private store: Store){}

  public connect(): void {
    if (this.isSelected(this.node.id)) {
      this.store.dispatch(new DeselectNode(this.node.id));
      return;
    }
    if (this.isTheSameType(this.node.type)) {
      console.warn('cant connect nodes of the same type');
      this.store.dispatch(new ClearSelection());
      return;
    }
    if (this.checkSelectionMatch()) {
      //todo: behavior for established connection
      return;
    }
    this.store.dispatch(new SelectNode(this.node));
  }

  private checkSelectionMatch(): boolean {
    let selected = false;
    this.selectedNodes$.subscribe(selectedNodes => {
      selected = !!selectedNodes.length;
    });
    return selected;
  }

  private isSelected(id: string): boolean {
    let selected = false;
    this.selectedNodes$.subscribe(selectedNodes => {
      selected = selectedNodes.some(obj => obj.id === id);
    });
    return selected;
  }

  private isTheSameType(type: NodeType): boolean {
    let selected = false;
    this.selectedNodes$.subscribe(selectedNodes => {
      selected = selectedNodes.some(obj => obj.type === type);
    });
    return selected;
  }
}
