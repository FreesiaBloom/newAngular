import { NodeType } from "../enums/node-type.enum";

export interface NodeItem {
  id: string;
  title: string
  type: NodeType;
  formFields: FormField[];
}

export interface FormField {
  type: string;
  label: string;
  name: string;
  placeholder?: string;
  options?: string[];
  value?: string;
}
