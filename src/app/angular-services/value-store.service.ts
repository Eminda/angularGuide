import {Injectable} from '@angular/core';

@Injectable()
export class ValueStoreService {
  value: Number = 0;

  constructor() {
  }

  getValue(): Number {
    return this.value;
  }

  setValue(value: Number) {
    this.value = value;
  }

}
