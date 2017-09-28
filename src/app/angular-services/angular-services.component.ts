import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-angular-services',
  templateUrl: './angular-services.component.html',
  styleUrls: ['./angular-services.component.css']
})
export class AngularServicesComponent implements OnInit {

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
  }

  loadDemo(i: any) {
    this.router.navigate(['demo'+i], {relativeTo: this.activatedRoute});
  }

}
