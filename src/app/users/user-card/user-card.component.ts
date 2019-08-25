import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {MatSliderChange} from '@angular/material/slider';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.css'],
  // inputs: ['user']
})
export class UserCardComponent implements OnInit {
  @Input()
  public user: any;

  @Input() index: number;

  @Input()
  public color: string;

  @Input()
  public img: string;


  @Output()
  public editEvent: EventEmitter<string> = new EventEmitter();

  @Output()
  updateView: EventEmitter<string> = new EventEmitter();


  @Output()
  public updateRaiting: EventEmitter<any> = new EventEmitter();


  constructor() { }

  ngOnInit() {

  }

  deleteItem(id: string) {
    console.log(id);
    this.editEvent.emit(id);
  }


  changeSlider(event: MatSliderChange) {
      console.log(event);

      this.updateRaiting.emit({ value: event.value, id: this.user.id})

  }

  updateActive() {
    this.updateView.emit()
  }
}
