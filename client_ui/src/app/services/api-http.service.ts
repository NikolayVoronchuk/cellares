import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiHttpService {

  constructor(private http: HttpClient) { }

  private API_URL='http://localhost:4002';

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.');
  };

  startProcedure(seconds: number): Observable<any>{
    return this.http.post(`${this.API_URL}/instrument/procedure/engage`, {status: true, seconds: seconds}).pipe(
      catchError(this.handleError)
    );
  }

  stopProcedure(): Observable<any>{
    return this.http.post(`${this.API_URL}/instrument/procedure/engage`, {status: false}).pipe(
      catchError(this.handleError)
    );
  }

  connect(status: boolean): Observable<any>{
    return this.http.post(`${this.API_URL}/instrument/connect`, {connect: status}).pipe(
      catchError(this.handleError)
    );
  }

  getConnectionStatus(): Observable<any>{
    return this.http.get(`${this.API_URL}/instrument/isconnected`);
  }

  getProcedureStatus(): Observable<any>{
    return this.http.get(`${this.API_URL}/procedure/isrunning`);
  }

  getDurationTimeLeft(): Observable<any>{
    return this.http.get(`${this.API_URL}/procedure/timeleft`);
  }

  getData(): Observable<any>{
    return this.http.get(`${this.API_URL}/instrument/getdata`);
  }
}
