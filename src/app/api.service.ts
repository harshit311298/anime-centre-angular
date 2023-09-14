import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse,HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:1964';

  constructor(private http: HttpClient) {}

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/v1/user/signup`, user).pipe(
      catchError(this.handleError)
    );
  }
  otpVerify(user: any,queryParams: any): Observable<any> {
    let params = new HttpParams();
    for (const key in queryParams) {
      if (queryParams.hasOwnProperty(key)) {
        params = params.append(key, queryParams[key]);
      }
    }
    return this.http.post(`${this.apiUrl}/api/v1/user/otpVerifyForPlatform`, user,{ params }).pipe(
      catchError(this.handleError)
    );
  }
  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An error occurred.';
    if (error.error instanceof ErrorEvent) {
      error.error
    } else {
      error.error
        }
    console.error("taddscadfxafdxszdf",error);
    return throwError(error);
  }
}
