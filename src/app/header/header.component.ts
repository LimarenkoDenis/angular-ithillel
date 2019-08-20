import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public readonly name = 'Dan';
  private privateName = 'Private';
  public account: {  } = {
    name: 'Dan',
    position: 'Engeener'
  };

  constructor() { }

  ngOnInit() {
  }



  getRandom(): number {
    const name = 'Dima';

    console.log('this name: ', this.name,    'const name:', name);

    return Math.random();
  }
}
