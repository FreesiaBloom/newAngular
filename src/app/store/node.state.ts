import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { NodeItem } from '../interfaces/node-item.interface';
import { Injectable } from '@angular/core';
import { NodeService } from '../services/node.service';
import { nodes } from '../const/nodes.const';

export class GetAllNodes {
  static readonly type = '[Node] Get All';
}

export class AddNode {
  static readonly type = '[Node] Add';
  constructor(public payload: NodeItem) {}
}

export class SelectNode {
  static readonly type = '[Node] Select';
  constructor(public payload: NodeItem) {}
}

export class DeselectNode {
  static readonly type = '[Node] Deselect';
  constructor(public payload: string) {} // payload is the id of the object to deselect
}

export class ClearSelection {
  static readonly type = '[Node] ClearSelection';
}

export interface NodeStateModel {
  nodes: NodeItem[];
  selectedNodes: NodeItem[];
}

@State<NodeStateModel>({
  name: 'Node',
  defaults: {
    nodes: nodes,
    selectedNodes: []
  },
})
@Injectable()
export class NodeState {
  public constructor(private nodeService: NodeService) {}

  @Selector([NodeState])
  public static getNodes(state: NodeStateModel) {
    return state.nodes;
  }

  @Selector()
  static getSelectedNodes(state: NodeStateModel) {
    return state.selectedNodes;
  }

  @Action(GetAllNodes)
  public getAllNodes(ctx: StateContext<NodeStateModel>): Observable<NodeItem[]> {
    return this.nodeService.getAllNodes().pipe(
      tap((response: NodeItem[]) => {
        const state = ctx.getState();
        ctx.setState({
          ...state,
          nodes: response,
        });
      })
    );
  }

  @Action(AddNode)
  addNode(ctx: StateContext<NodeStateModel>, action: AddNode) {
    const state = ctx.getState();
    console.log(state, action.payload);
    ctx.setState({
      ...state,
      nodes: [...state.nodes, action.payload]
    });
  }

  @Action(SelectNode)
  selectNode(ctx: StateContext<NodeStateModel>, action: SelectNode) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedNodes: [...state.selectedNodes, action.payload]
    });
  }

  @Action(DeselectNode)
  deselectNode(ctx: StateContext<NodeStateModel>, action: DeselectNode) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedNodes: state.selectedNodes.filter(obj => obj.id !== action.payload)
    });
  }

  @Action(ClearSelection)
  clearSelection(ctx: StateContext<NodeStateModel>) {
    const state = ctx.getState();
    ctx.setState({
      ...state,
      selectedNodes: []
    });
  }
}
