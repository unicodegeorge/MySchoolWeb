import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
    @Output()
    clicked = new EventEmitter<void>();
  constructor() { }
  search = '';
  routes = ['home', 'about', 'contacts', 'events'];
  ngOnInit(): void {
  }
  get links(): string[]{
    const links = [];
    if (!this.search) {
      return [];
    }
    for (const route of this.routes) {

      if (route.includes(this.search)) {
        links.push(route);
      }
    }
    return links;
  }
}
