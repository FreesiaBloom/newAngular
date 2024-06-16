import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeComponent } from './NodeComponent';
import { TypePipe } from '../../pipes/type.pipe';
import { NodeFormComponent } from '../node-form/node-form.component';

describe('NodeComponent', () => {
  let component: NodeComponent;
  let fixture: ComponentFixture<NodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeComponent, NodeFormComponent, TypePipe]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
