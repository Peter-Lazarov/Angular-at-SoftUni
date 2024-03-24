import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable, Provider } from "@angular/core";
import { Observable, catchError } from "rxjs";
import { environment } from "src/environments/environment.development";
import { ErrorService } from "./error/error.service";
import { Router } from "@angular/router";

@Injectable()
class AppInterceptor implements HttpInterceptor {
    API = '/api';

    constructor(private errorService: ErrorService, private router: Router){

    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.startsWith(this.API)) {
            request = request.clone({
                url: request.url.replace(this.API, environment.apiUrl),
                withCredentials: true
            })
        }

        return next.handle(request).pipe(catchError((error) => {
            this.errorService.setError(error);
            if (error.status == 401) {
                this.router.navigate(['/authentication/login']);
            }else{
                this.errorService.setError(error);
                this.router.navigate(['/error']);
            }
            return [error];
        }))
    }
}

export const AppInterceptorProvider: Provider = {
    useClass: AppInterceptor,
    multi: true,
    provide: HTTP_INTERCEPTORS
}
