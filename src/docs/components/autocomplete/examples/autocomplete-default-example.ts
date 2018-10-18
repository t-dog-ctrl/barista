import { Component } from '@angular/core';
import { OriginalClassName } from '../../../core/decorators';

@Component({
  moduleId: module.id,
  template: `
  <input dtInput [dtAutocomplete]="auto" [(ngModel)]="value" placeholder="Start typing">
  <dt-autocomplete #auto="dtAutocomplete">
    <dt-option *ngFor="let option of options" [value]="option">{{option}}</dt-option>
  </dt-autocomplete>
  `,
})
@OriginalClassName('DefaultAutocompleteExample')
export class DefaultAutocompleteExample {

  value: string;
  options: string[] = ['One', 'Two', 'Three'];
}
