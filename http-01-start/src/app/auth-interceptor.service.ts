import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Requst is on its way');
        console.log(req.url);
        const modifiedRequst = req.clone({headers: req.headers.append('Auth', 'xyz')
        });
        return next.handle(modifiedRequst);
    }
}