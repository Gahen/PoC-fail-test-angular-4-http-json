import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

export class Model {
  public testProp: any

  constructor(obj:any, protected http:Http) {
    Object.assign(this, obj);
  }

  get(url = 'http://localhost:4200/assets/test.json'): Observable<any> {
    var obs = this.http.request(url)
	.map(el => {
		return el.json()
    })

	obs.subscribe(res => {
		this.testProp = res.testProp
	});
    return obs;
  }
}
