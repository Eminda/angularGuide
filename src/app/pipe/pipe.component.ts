import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {
  data = {name: 'Kamal', city: 'Moratuwa'};

  people = [{name: 'Nimal', city: 'Colombo'}, {name: 'Kammaliya', city: 'Nugegoda'}, {name: 'Sunil', city: 'Kandy'},
    {name: 'Nirmal', city: 'Ambalangoda'}];

  name;

  constructor() {
  }

  ngOnInit() {
  }

}
