import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  constructor() { }
  name = '';
  email = '';
  zprava = '';
  ngOnInit(): void {
  }
  send(): void {
      console.log(`${this.name} \n ${this.email} \n ${this.zprava}`);
  }

}
