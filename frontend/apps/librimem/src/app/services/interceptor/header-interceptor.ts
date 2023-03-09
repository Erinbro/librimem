import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

/**
 * Adds the JWT token to the 'Authorization' header if available
 */
export class AddHeaderInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem("token")

    // If no token then go on
    if (!token) {
      console.log("No cookie")
      return next.handle(req.clone());
    }

    const clonedRequest = req.clone({
      headers: req.headers
        .append("Authorization", `Bearer ${token}`)
    })

    console.log(`The req with Authorization header:
    ${JSON.stringify(clonedRequest)}`)

    return next.handle(clonedRequest)
  }
}
