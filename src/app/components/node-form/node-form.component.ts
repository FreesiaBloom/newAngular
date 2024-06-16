import { Component, Input, OnInit } from '@angular/core';
import { FormField } from '../../interfaces/node-item.interface';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { TextFieldModule } from '@angular/cdk/text-field';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-node-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    TextFieldModule,
    MatSelectModule,
  ],
  templateUrl: './node-form.component.html',
  styleUrl: './node-form.component.scss',
})
export class NodeFormComponent implements OnInit {
  @Input() public formFields: FormField[] = [];

  public form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({});
  }

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.formFields.forEach((field) => {
      this.form.addControl(
        field.name,
        this.formBuilder.control(field.value || '')
      );
    });
  }
}
