import {Component, OnInit} from '@angular/core';
import {ValueStoreService} from "../value-store.service";

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  value: Number = 0;
  otherValue: Number = 0;

  constructor(private valueService: ValueStoreService) {
  }

  ngOnInit() {
    this.valueService.getValue().subscribe(next => {
      this.value = next;
    });
  }

  save(value: any) {
    this.valueService.setValue(value);
  }

  saveOther(value: any) {
    this.valueService.setOtherValue(value);
  }

  load() {
    this.otherValue = this.valueService.getOtherValue();
  }

}
