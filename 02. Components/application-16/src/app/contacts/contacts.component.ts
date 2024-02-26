import { Component } from '@angular/core';

type Employee = {
  name: string,
  age: number
};

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  employees = [
    {name: 'Pesho', age: 18},
    {name: 'Gosho', age: 20},
    {name: 'Ivan', age: 19},
    {name: 'Todor', age: 25},
    {name: 'Ivo', age: 27},
  ] as Employee[];

  handleClick(event: Event){
    console.log(event);
  }
};

