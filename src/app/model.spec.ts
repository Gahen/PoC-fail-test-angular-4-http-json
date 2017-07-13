import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { APP_BASE_HREF } from "@angular/common";
import { Model } from './model'
import { Injectable, ReflectiveInjector } from '@angular/core';
import { ResponseOptions, BaseRequestOptions, ConnectionBackend, Http, RequestOptions } from '@angular/http';
import { MockBackend, MockConnection} from '@angular/http/testing';
import { Observable } from "rxjs/Observable";
  
describe('Model', () => {
  beforeEach(() => {
    this.injector = ReflectiveInjector.resolveAndCreate([
      {provide: ConnectionBackend, useClass: MockBackend},
      {provide: RequestOptions, useClass: BaseRequestOptions},
      Http
    ]);
    this.mockHttp = this.injector.get(Http);
    this.backend = this.injector.get(ConnectionBackend) as MockBackend;
    this.backend.connections.subscribe((connection: any) => this.lastConnection = connection);
    this.model = new Model({}, this.mockHttp); 
  });
    
  it('should get an element from the server', fakeAsync(() => {
    const model = new Model({}, this.mockHttp);
	model.get()
    this.lastConnection.mockRespond(new Response(new ResponseOptions({
      body: JSON.stringify({ testProp: 123 })
    })));
    tick();
	console.log(model.testProp)
    expect(model.testProp).toBe(123)
  }));
});
