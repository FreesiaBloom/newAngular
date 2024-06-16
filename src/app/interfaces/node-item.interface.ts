import { NodeType } from "../components/enums/node-type.enum";

export interface NodeItem {
  id: string;
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
