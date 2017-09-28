import {Component, OnInit} from '@angular/core';
import {ValueStoreService} from "../value-store.service";

@Component({
  selector: 'app-demo2',
  templateUrl: './demo2.component.html',
  styleUrls: ['./demo2.component.css']
})
export class Demo2Component implements OnInit {
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
