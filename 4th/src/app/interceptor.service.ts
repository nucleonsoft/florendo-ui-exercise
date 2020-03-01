import { Injectable, Injector } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor(public auth: ApiService, private injector: Injector) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const authservice = this.injector.get(ApiService);
    const tokenreq = req.clone({
        setHeaders: {
          "Content-Type": "application/json; charset=utf-8",
          //enctype : 'multipart/form-data',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : '*',
          'Access-Control-Allow-Headers' : "Origin, X-Requested-With, Content-Type, Accept"
        }
      });
    return next.handle(tokenreq);
  }
}
