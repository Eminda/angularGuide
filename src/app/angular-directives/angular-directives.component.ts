import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-angular-directives',
  templateUrl: './angular-directives.component.html',
  styleUrls: ['./angular-directives.component.css']
})
export class AngularDirectivesComponent implements OnInit {
  ifCondition = true;

  people = [{name: 'Eminda'}, {name: 'Kajan'}];

  switchCondition = 'switch1';

  count = 1;

  constructor() {
  }

  ngOnInit() {
  }

  toggleIf() {
    this.ifCondition = !this.ifCondition;
  }

  toggleSwitch() {
    if (this.count === 4) {
      this.count = 0;
    }
    this.count++;
    this.switchCondition = 'switch' + this.count;
  }

}
