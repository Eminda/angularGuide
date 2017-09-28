import {Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";
import {Observable} from "rxjs/Observable";
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class ValueStoreService {
  private value = new Subject<Number>();

  private otherValue = new BehaviorSubject<Number>(0);

  constructor() {
  }

  getValue(): Observable<Number> {
    return this.value.asObservable();
  }

  setValue(value: Number) {
    this.value.next(value);
  }

  getOtherValue(): Number {
    return this.otherValue.getValue();
  }

  getOtherValueAsObservable(): Observable<Number> {
    return this.otherValue.asObservable();
  }

  setOtherValue(value: any) {
    this.otherValue.next(value);
  }

}
