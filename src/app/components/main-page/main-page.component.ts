import { Component, inject } from '@angular/core';
import { CdkDrag } from '@angular/cdk/drag-drop';
import { NodeItem } from '../../interfaces/node-item.interface';
import { NodeComponent } from '../node/node.component';
import { v4 as uuidv4 } from 'uuid';
import { NodeType } from '../enums/node-type.enum';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';

const components: any[] = [NodeComponent];
const materialComponents: any[] = [
  CdkDrag,
  MatGridListModule,
  MatExpansionModule,
  MatButtonModule,
  MatIconModule,
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

  ngOnInit(): void {
    this.populateNodes();
  }

  public addNewNode() {
    this.nodes.push({
      id: uuidv4(),
      type: NodeType.TYPE_ONE,
      formFields: [
        {
          type: 'text',
          label: 'name',
          name: 'name',
          placeholder: 'Write text here',
        },
        {
          type: 'text',
          label: 'input 1',
          name: 'input 1',
          placeholder: 'Write text here',
        },
        {
          type: 'text',
          label: 'input 2',
          name: 'input 2',
          placeholder: 'Write text here',
        },
      ],
    });
  }

  private populateNodes() {
    this.nodes = [
      {
        id: uuidv4(),
        type: NodeType.TYPE_ONE,
        formFields: [
          {
            type: 'text',
            label: 'name',
            name: 'name',
            placeholder: 'Write text here',
          },
          {
            type: 'text',
            label: 'input 1',
            name: 'input 1',
            placeholder: 'Write text here',
          },
          {
            type: 'text',
            label: 'input 2',
            name: 'input 2',
            placeholder: 'Write text here',
          },
        ],
      },
      {
        id: uuidv4(),
        type: NodeType.TYPE_TWO,
        formFields: [
          {
            type: 'text',
            label: 'name',
            name: 'name',
            placeholder: 'Write text here',
          },
          {
            type: 'textarea',
            label: 'input 7',
            name: 'input 7',
            placeholder: 'Write text here',
          },
        ],
      },
      {
        id: uuidv4(),
        type: NodeType.TYPE_ONE,
        formFields: [
          {
            type: 'text',
            label: 'name',
            name: 'name',
            placeholder: 'Write text here',
          },
          {
            type: 'text',
            label: 'input 1',
            name: 'input 1',
            placeholder: 'Write text here',
          },
          {
            type: 'text',
            label: 'input 2',
            name: 'input 2',
            placeholder: 'Write text here',
          },
        ],
      },
      {
        id: uuidv4(),
        type: NodeType.TYPE_THREE,
        formFields: [
          {
            type: 'select',
            label: 'input 3',
            name: 'input 3',
            options: ['one', 'two', 'three'],
          },
        ],
      },
    ];
  }
}
