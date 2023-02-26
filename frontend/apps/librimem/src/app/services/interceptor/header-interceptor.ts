import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

/**
 * Adds the JWT token to the 'Authorization' header if available
 */
export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token")

    // If no token then go one
    if (!token) return next.handle(req.clone());
    console.log(`no token`);


    const clonedRequest = req.clone({
      headers: req.headers
        .append("Authorization", `Bearer ${token}`)
    })

    return next.handle(clonedRequest)
  }
}
