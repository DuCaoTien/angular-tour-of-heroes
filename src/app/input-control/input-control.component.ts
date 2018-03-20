import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-control',
  templateUrl: './input-control.component.html',
  styleUrls: ['./input-control.component.css']
})
export class InputControlComponent implements OnInit, OnDestroy {

  name = "default name";

  constructor() {
    console.log('constructor')
  }

  ngOnInit() {
    
    console.log('init');
  }

  ngOnDestroy() {
    console.log('destroy');
  }

  clickMe(){
    this.name = this.name + " - updated";
  }

}
