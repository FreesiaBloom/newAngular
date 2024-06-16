import { Component, inject } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NodeItem } from '../../interfaces/node-item.interface';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ClearSelection, GetAllNodes, NodeState } from '../../store/node.state';
import { Observable } from 'rxjs';
import { Store } from '@ngxs/store';
import { AddNewNodeComponent } from '../add-new-node/add-new-node.component';
import { NodeComponent } from '../node/node.component';
import { MatIconModule } from '@angular/material/icon';

const components: any[] = [AddNewNodeComponent, NodeComponent];
const materialComponents: any[] = [
  CdkDrag,
  MatGridListModule,
  MatExpansionModule,
  MatButtonModule,
  MatIconModule
];

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [...components, ...materialComponents],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  public nodes: NodeItem[] = [];
  public nodes$: Observable<NodeItem[]> = inject(Store).select(
    NodeState.getNodes
  );

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.nodes$.subscribe({
      next: (nodes: NodeItem[]) => {
        this.store.dispatch(new GetAllNodes());
        this.nodes = nodes;
      },
    });
  }

  public clearSelection(): void {
    this.store.dispatch(new ClearSelection());
  }
}
