import { Injectable } from '@angular/core';
import { NodeItem } from '../interfaces/node-item.interface';
import { Observable, of } from 'rxjs';
import { nodes } from '../const/nodes.const';

@Injectable({
  providedIn: 'root',
})
export class NodeService {
  public getAllNodes(): Observable<NodeItem[]> {
    return of(nodes);
  }
}
