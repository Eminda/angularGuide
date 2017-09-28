import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ValueStoreService} from "./value-store.service";

@Component({
  selector: 'app-angular-services',
  templateUrl: './angular-services.component.html',
  styleUrls: ['./angular-services.component.css']
})
export class AngularServicesComponent implements OnInit {
  value: Number = 0;
  otherValue: Number = 0;

  constructor(private router: Router, private activatedRoute: ActivatedRoute, private valueStore: ValueStoreService) {
  }

  ngOnInit() {
    this.valueStore.getValue().subscribe(nextVal => {
      this.value = nextVal;
    });
    this.valueStore.getOtherValueAsObservable().subscribe(next => {
      this.otherValue = next;
    })
  }

  loadDemo(i: any) {
    this.router.navigate(['demo' + i], {relativeTo: this.activatedRoute});
  }

}
