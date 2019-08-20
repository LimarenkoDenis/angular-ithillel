import { environment } from './../environments/environment';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ithellel';
  cat = 'assets/imgs/cat.jpeg';


  ngOnInit() {
    console.log(environment);

  }
}
