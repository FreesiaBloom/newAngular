import { Component } from '@angular/core';
import { NodeType } from '../../enums/node-type.enum';
import { TypePipe } from '../../pipes/type.pipe';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Store } from '@ngxs/store';
import { generateNewNode } from '../../helpers/generate-node.helpers';
import { AddNode, GetAllNodes } from '../../store/node.state';

@Component({
  selector: 'app-add-new-node',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    TypePipe,
  ],
  templateUrl: './add-new-node.component.html',
  styleUrl: './add-new-node.component.scss',
})
export class AddNewNodeComponent {
  public readonly nodeType: typeof NodeType = NodeType;

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder, private store: Store) {
    this.form = this.formBuilder.group({
      titleFormControl: this.formBuilder.control<string | null>(
        null,
        Validators.required
      ),
      selectedTypeFormControl: this.formBuilder.control<string | null>(
        null,
        Validators.required
      ),
    });
  }

  public onAdd(): void {
    const selectedType = this.form.get('selectedTypeFormControl')?.value;
    const title = this.form.get('titleFormControl')?.value;
    if (selectedType && title) {
      this.store.dispatch(
        new AddNode(generateNewNode(selectedType, title))
      );
      this.store.dispatch(new GetAllNodes());
    }
  }
}
