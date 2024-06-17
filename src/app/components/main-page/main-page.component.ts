import { ChangeDetectionStrategy, Component, OnInit, inject } from '@angular/core';
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
import { CommonModule } from '@angular/common';

const components: any[] = [AddNewNodeComponent, NodeComponent, CommonModule ];
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
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MainPageComponent implements OnInit {
  public nodes$: Observable<NodeItem[]> = inject(Store).select(
    NodeState.getNodes
  );

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(new GetAllNodes());
  }

  public clearSelection(): void {
    this.store.dispatch(new ClearSelection());
  }
}
