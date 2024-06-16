import { Component } from '@angular/core';
import {
  CdkDrag,
} from '@angular/cdk/drag-drop';
import { NodeItem } from '../../interfaces/node-item.interface';
import { NodeComponent } from '../node/node.component';
import { v4 as uuidv4 } from 'uuid';
import { NodeType } from '../enums/node-type.enum';
import {MatGridListModule} from '@angular/material/grid-list';

@Component({
  selector: 'app-main-page',
  standalone: true,
  imports: [CdkDrag, NodeComponent, MatGridListModule],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {
  public nodes: NodeItem[] = [
    {
      id: uuidv4(),
      type: NodeType.TYPE_ONE,
      formFields: [
        {
          type: 'text',
          label: 'name',
          name: 'name',
          placeholder: 'Write text here'
        },
        {
          type: 'text',
          label: 'input 1',
          name: 'input 1',
          placeholder: 'Write text here'
        },
        {
          type: 'text',
          label: 'input 2',
          name: 'input 2',
          placeholder: 'Write text here'
        }
      ]
    },
    {
      id: uuidv4(),
      type: NodeType.TYPE_TWO,
      formFields: [
        {
          type: 'text',
          label: 'name',
          name: 'name',
          placeholder: 'Write text here'
        },
        {
          type: 'textarea',
          label: 'input 7',
          name: 'input 7',
          placeholder: 'Write text here'
        }
      ]
    },
    {
      id: uuidv4(),
      type: NodeType.TYPE_ONE,
      formFields: [
        {
          type: 'text',
          label: 'name',
          name: 'name',
          placeholder: 'Write text here'
        },
        {
          type: 'text',
          label: 'input 1',
          name: 'input 1',
          placeholder: 'Write text here'
        },
        {
          type: 'text',
          label: 'input 2',
          name: 'input 2',
          placeholder: 'Write text here'
        }
      ]
    },
    {
      id: uuidv4(),
      type: NodeType.TYPE_THREE,
      formFields: [
        {
          type: 'select',
          label: 'input 3',
          name: 'input 3',
          options: ['one', 'two', 'three']
        }
      ]
    },
  ];

}
