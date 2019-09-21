import { Injectable } from '@angular/core';
import {HttpInterceptor, HttpRequest, HttpHandler} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements HttpInterceptor {

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const token: string  = localStorage.getItem('token');


    console.log('auth');


    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
      headers: req.headers.set('Authorization', token)
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}
