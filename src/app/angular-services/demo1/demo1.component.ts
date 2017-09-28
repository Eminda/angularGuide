import {Component, OnInit} from '@angular/core';
import {ValueStoreService} from "../value-store.service";

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css']
})
export class Demo1Component implements OnInit {
  value: Number = 0;

  constructor(private valueService: ValueStoreService) {
  }

  ngOnInit() {
    this.load();
  }

  save(value: any) {
    this.valueService.setValue(value);
  }

  load() {
    this.value = this.valueService.getValue();
  }
}
