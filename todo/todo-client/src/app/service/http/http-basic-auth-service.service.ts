import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpBasicAuthServiceService  implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username = 'user';
    let password = 'password';
    let basicAuthHeadString = 'Basic '+ window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders :{
        Authorization : basicAuthHeadString
      }
    })

    return next.handle(request);
  }


}
