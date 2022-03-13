import { HttpEvent, HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs/operators";

export class AuthInterceptorService implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log('Requst is on its way');
        console.log(req.url);
        const modifiedRequst = req.clone({headers: req.headers.append('Auth', 'xyz')
        });
        return next.handle(modifiedRequst).pipe(tap(event => {
            console.log(event);
            if (event.type === HttpEventType.Response) {
                console.log('Response arrived, body data: ');
                console.log(event.body);
            }
        }));
    }
}