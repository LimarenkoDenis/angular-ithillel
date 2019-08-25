import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {


  @Output()
  public deleteEvent: EventEmitter<void> = new EventEmitter();

  
  constructor() { }

  ngOnInit() {
  }


  deleteItem() {
    this.deleteEvent.emit();
  }
}
