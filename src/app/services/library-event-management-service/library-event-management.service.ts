import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import {EventStatus} from '../../controllers/events/event-status';
import {EventType} from '../../controllers/events/event-type';
import {EventFrequency} from '../../controllers/events/event-frequency';
import {CalendarEvent} from '../../controllers/events/calendar-event.interface';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable()

export class LibraryEventManagementService {

  constructor(private http: Http,
              private router: Router) { }

  libraryEventManagementService = environment.libraryEventManagementServices;

  getEvents() {
    const url = this.libraryEventManagementService + 'getCalendarEvents';
    return this.http.get(url)
      .map(
        (response: any) => {
          return response.json();
        }
      );
  }

  getEventByPartialDate(partialDate: string) {
    const url = this.libraryEventManagementService + 'getEventsByPartialDate?date=' + partialDate;
    return this.http.get(url)
      .map(
        (response: any) => {
          return response.json();
        }
      );
  }

  getEventStatuses() {
    const url = this.libraryEventManagementService + 'getEventStatuses';
    return this.http.get(url)
      .map(
        (response: any) => {
          return response.json();
        }
      );
  }

  getEventTypes() {
    const url = this.libraryEventManagementService + 'getEventTypes';
    return this.http.get(url)
      .map(
        (response: any) => {
          return response.json();
        }
      );
  }

  getEventFrequency() {
    const url = this.libraryEventManagementService + 'getEventFrequency';
    return this.http.get(url)
      .map(
        (response: any) => {
          return response.json();
        }
      );
  }

  addEvent(calendarEvent: CalendarEvent): Observable<any> {
    const url = this.libraryEventManagementService + 'addCalendarEvent';
    console.log(calendarEvent);
    return this.http.post(url, calendarEvent)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  addEventStatus(eventStatus: EventStatus): Observable<any> {
    const url = this.libraryEventManagementService + 'addEventStatus';
    console.log(eventStatus);
    return this.http.post(url, eventStatus)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  addEventType(eventType: EventType): Observable<any> {
    const url = this.libraryEventManagementService + 'addEventType';
    console.log(eventType);
    return this.http.post(url, eventType)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  addEventFrequency(eventFrequency: EventFrequency): Observable<any> {
    const url = this.libraryEventManagementService + 'addEventFrequency';
    console.log(eventFrequency);
    return this.http.post(url, eventFrequency)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  deleteEvent(eventId: string) {
    const url = `${this.libraryEventManagementService}deleteCalendarEvent/${eventId}`;

    console.log(url);

    return this.http.get(url)
      .toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }

  deleteEventStatus(eventStatusId: number) {
    const url = `${this.libraryEventManagementService}deleteEventStatus/${eventStatusId}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(result => console.log(result))
      .catch(error => console.log(error));
  }

  deleteEventType(eventTypeId: number) {
    const url = `${this.libraryEventManagementService}deleteEventType/${eventTypeId}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise);
  }

  deleteEventFrequency(eventFrequencyId: number) {
    const url = `${this.libraryEventManagementService}deleteEventFrequency/${eventFrequencyId}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise);
  }

  extractData(res: Response) {
    const body = res.json();
    console.log(body);
    return body || {};
  }

  handleErrorObservable (error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  handleErrorPromise ( error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
