import { NodeType } from '../components/enums/node-type.enum';
import { TypePipe } from './type.pipe';

describe('TypePipe', () => {
  it('create an instance', () => {
    const pipe = new TypePipe();
    expect(pipe).toBeTruthy();
  });

  it('should return Typ 1 string for TYPE_ONE type', () => {
    const pipe = new TypePipe();

    const result: string = pipe.transform(NodeType.TYPE_ONE);

    expect(result).toBe('Typ 1');
  });

  it('should return Typ 2 string for TYPE_TWO type', () => {
    const pipe = new TypePipe();

    const result: string = pipe.transform(NodeType.TYPE_TWO);

    expect(result).toBe('Typ 2');
  });

  it('should return Typ 3 string for TYPE_THREE type', () => {
    const pipe = new TypePipe();

    const result: string = pipe.transform(NodeType.TYPE_THREE);

    expect(result).toBe('Typ 3');
  });
});
