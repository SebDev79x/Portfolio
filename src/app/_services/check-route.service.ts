import { Injectable } from '@angular/core';
import { Router, RouterEvent, Event } from '@angular/router';
import { BehaviorSubject, filter, map } from 'rxjs';
@Injectable({
  providedIn: 'root'
})

export class CheckRouteService {
  public currentRoute!: any;
  public start!: any;
  public end!: any;
  public url!: any;
  constructor(private router: Router) {

  }
  /** GET URL */
  getCurrentRoute(): any {
    return this.router.events
      .pipe(
        filter((e: Event): e is RouterEvent => e instanceof RouterEvent)
      )
  }
  /** GET URL */

  getNavigationStart = () => {
    return this.router.events
      .pipe(
        filter((e): e is RouterEvent => e instanceof RouterEvent)
      )
  }

}
