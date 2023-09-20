import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  showPost = false;
  name = 'Angular ' + VERSION.major;
  myList = [{title: "ciao", body: "ehi"}]
}
