
import { v4 as uuidv4 } from 'uuid';
import { NodeType } from '../enums/node-type.enum';
import { FormField, NodeItem } from '../interfaces/node-item.interface';



export const formFieldsTypeOne: FormField[] = [
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
  }
];

export const formFieldsTypeTwo: FormField[] = [
  {
    type: 'textarea',
    label: 'input 7',
    name: 'input 7',
    placeholder: 'Write text here',
  },
];

export const formFieldsTypeThree: FormField[] = [
  {
    type: 'select',
    label: 'input 3',
    name: 'input 3',
    options: ['one', 'two', 'three'],
  },
];



export const nodes: NodeItem[] = [
  {
    id: uuidv4(),
    title: 'First',
    type: NodeType.TYPE_ONE,
    formFields: formFieldsTypeOne,
  },
  {
    id: uuidv4(),
    title: 'Alpha',
    type: NodeType.TYPE_TWO,
    formFields: formFieldsTypeTwo,
  },
  {
    id: uuidv4(),
    title: 'Second',
    type: NodeType.TYPE_ONE,
    formFields: formFieldsTypeOne,
  },
  {
    id: uuidv4(),
    title: 'Filter',
    type: NodeType.TYPE_THREE,
    formFields: formFieldsTypeThree
  },
];
