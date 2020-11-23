import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  constructor() { }
    events = [{name: 'THE BEST IT WORKER', date: '11.7.2021', time: '19:00'}, {name: 'FREE JAVASCRIPT WORKSHOP', date: '23.8.2021', time: '13:00'}, {name: 'THE BEST IT WORKER', date: '11.7.2021', time: '19:00'}, {name: 'THE BEST IT WORKER', date: '11.7.2021', time: '19:00'}];
  ngOnInit(): void {
  }

}
