import { Component } from '@angular/core';
import { Model } from "./model";
import { Http } from "@angular/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app'
  model: Model
  constructor(private http: Http) {
	  this.model = new Model({}, http)
	  this.model.get().subscribe(() => {
		  console.log(this.model.testProp === 123 ? 'WORKED' : 'DIDNT WORKED')
	  })
  }
}
