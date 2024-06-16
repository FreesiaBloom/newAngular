import { v4 as uuidv4 } from 'uuid';
import { NodeType } from "../enums/node-type.enum";
import { FormField, NodeItem } from "../interfaces/node-item.interface";
import { formFieldsTypeOne, formFieldsTypeThree, formFieldsTypeTwo } from '../const/nodes.const';


export function generateNewNode(type: NodeType, title: string): NodeItem {
  const newNode: NodeItem = {
    id: uuidv4(),
    title: title,
    type: type,
    formFields: generateFormFields(type)
  }
  return newNode;
}

export function generateFormFields(type: NodeType): FormField[] {
  switch(type) {
    case(NodeType.TYPE_ONE): return formFieldsTypeOne;
    case(NodeType.TYPE_TWO): return formFieldsTypeTwo;
    case(NodeType.TYPE_THREE): return formFieldsTypeThree;
    default: return [];
  }
}
