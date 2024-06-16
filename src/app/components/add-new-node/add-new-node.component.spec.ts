import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewNodeComponent } from './add-new-node.component';

describe('AddNewNodeComponent', () => {
  let component: AddNewNodeComponent;
  let fixture: ComponentFixture<AddNewNodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddNewNodeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddNewNodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
