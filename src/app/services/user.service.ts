import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, delay, tap } from 'rxjs/operators';

export class UserService {
  constructor() {}

  getUser(): Observable<{ name: string; age: number }> {
    return of({ name: 'Иван', age: 30, status: 'ERROR' }).pipe(delay(1000));
  }


  someMethod(): void {
    this.getUser().pipe(

      tap()
    )
    .subscribe()
  }
}


