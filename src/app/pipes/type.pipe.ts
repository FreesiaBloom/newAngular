import { Pipe, PipeTransform } from '@angular/core';
import { NodeType } from '../components/enums/node-type.enum';

@Pipe({
  name: 'type',
  standalone: true
})
export class TypePipe implements PipeTransform {

  transform(value: NodeType): string {
    switch(value) {
      case(NodeType.TYPE_ONE): return 'Typ 1';
      case(NodeType.TYPE_TWO): return 'Typ 2';
      case(NodeType.TYPE_THREE): return 'Typ 3';
      default: return '';
    }
  }

}
