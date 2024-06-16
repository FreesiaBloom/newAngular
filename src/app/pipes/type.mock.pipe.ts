import { Pipe, PipeTransform } from '@angular/core';
import { NodeType } from '../components/enums/node-type.enum';

@Pipe({
  name: 'type'
})
export class TypeMockPipe implements PipeTransform {
  transform(value: NodeType): string {
    return 'Type 1';
  }
}
