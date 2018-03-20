import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of Heroes';
  person = {
    name : "Du Cao Tien",
    age : 22,
    married : true,
    wife : {
      name : "asdsadfsdf",
      age: 20,
      married: true,
    }
  }

  constructor(){
    this.person.wife.name = "ABC";
    this.person.wife.age = 15;
  }
}
