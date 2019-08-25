import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public name = 'nick';
  description = 'desc';
  img = 'https://material.angular.io/assets/img/xamples/shiba2.jpg'

  myHref = 'http://instagram.com/instalimar';
  inputType = 'password';
  alt = 'Photo of a Shiba Inu';


  constructor() { }

  ngOnInit() {
  }


  changeView(myHref, name, event: MouseEvent) {

    console.log(event, myHref, name,);

    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }


  changeInput() {
    console.log('input');
  }

}
