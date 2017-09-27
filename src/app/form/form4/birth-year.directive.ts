import { Directive } from '@angular/core';
import {FormControl, NG_VALIDATORS, ValidationErrors} from "@angular/forms";

@Directive({
  selector: '[birthYear]',
  providers: [{provide: NG_VALIDATORS, useExisting: BirthYearDirective, multi: true}]
})
export class BirthYearDirective {

  validate(c: FormControl): ValidationErrors {
    const numValue = Number(c.value);
    const currentYear = new Date().getFullYear();
    const minYear = currentYear - 50;
    const maxYear = currentYear - 18;
    const isValid = !isNaN(numValue) && numValue >= minYear && numValue <= maxYear;
    const message = {
      'years': {
        'message': 'The year must be a valid number between ' + minYear + ' and ' + maxYear
      }
    };
    return isValid ? null : message;
  }

}
