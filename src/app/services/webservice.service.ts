import { Injectable } from '@angular/core';
import { Observable, of, from, } from 'rxjs';
import { catchError } from 'rxjs/Operators';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class WebserviceService {

  constructor(private httpClient: HttpClient) { }

  private handleError<T>(operation = 'operation') {
    return (error: any): Observable<T> => {
      return of(error as T);
    };
  }



  getPhotos() {
    return this.httpClient.get<any>('https://pixabay.com/api/?key=11323347-eb88045e881c43b68ac75a9d7').pipe(
      catchError(this.handleError('getPhotos'))
    );
  }
}
