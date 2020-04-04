import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ContactTime } from './../../controllers/reservation/contact-time';
import { ReservationStatus } from './../../controllers/reservation/reservation-status';
import { ReservationType } from './../../controllers/reservation/reservation-type';

import { Reservation} from '../../controllers/reservation/reservation';
import {environment} from '../../../environments/environment';

@Injectable()
export class LibraryEventReservationService {


  constructor(private http: Http) { }

  libraryReservationServices = environment.libraryReservationServices;

  getReservations(): Observable<Reservation[]> {
    const url = this.libraryReservationServices + 'getInquiries';
    return this.http.get(url)
        .map((response: any) => response.json())
        .catch(error => Observable.throw(error.json()));
  }

  getAllReservations() {
    const url = this.libraryReservationServices + 'getInquiries';
    return this.http.get(url)
      .map(
          (response: any) => {
            const data = response.json();
            return data;
          }
      );
  }

  getContactTimes() {
    const url = this.libraryReservationServices + 'getContactTimes';
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getInquiryTypes() {
    const url = this.libraryReservationServices + 'getInquiryTypes';
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getInquiryStatuses() {
    const url = this.libraryReservationServices + 'getInquiryStatuses';
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getReservationsCount() {
    const url = this.libraryReservationServices + 'getReservationsCount';
    return this.http.get(url)
      .map(
          (response: any) => {
            const data = response.json();
            return data;
          }
      );
  }

  addContactTime(contactTime: ContactTime): Observable<any> {
    const url = this.libraryReservationServices + 'createContactTime';
    console.log(contactTime);
    return this.http.post(url, contactTime)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  addReservationType(reservationType: ReservationType): Observable<any> {
    const url = this.libraryReservationServices + 'createInquiryType';
    console.log(reservationType);
    return this.http.post(url, reservationType)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  addReservationStatus(reservationStatus: ReservationStatus): Observable<any> {
    const url = this.libraryReservationServices + 'createInquiryStatus';
    console.log(reservationStatus);
    return this.http.post(url, reservationStatus)
    .map(this.extractData)
    .catch(this.handleErrorObservable);
  }

  deleteContactTime(contactTimeId: number): Promise<void> {
    const url = `${this.libraryReservationServices}deleteContactTime/${contactTimeId}`;

    console.log(url);
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise);
  }

  deleteReservation(id: number): Promise<void> {
    const url = `${this.libraryReservationServices}deleteInquiry/${id}`;

    console.log(url);
    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise);
  }

  /*deleteContactTime(contactTimeId: number): Observable<any>{
    let url = this.serverUrl + "deleteContactTime";
    console.log(contactTimeId);
    return this.http.post(url, {
      params: {
        contact_time_id: contactTimeId
      }
    }).map(this.extractData)
      .catch(this.handleErrorObservable);
  }*/

  deleteReservationType(reservationTypeId: number): Promise<void> {
    const url = `${this.libraryReservationServices}deleteInquiryType/${reservationTypeId}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise);
  }
  /*deleteReservationType(reservationTypeId: number): Observable<any>{
    let url = this.serverUrl + "deleteInquiryType";
    console.log(reservationTypeId);
    return this.http.post(url, {
      params: {
        inquiry_type_id: reservationTypeId
      }
    }).map(this.extractData)
    .catch(this.handleErrorObservable);
  }*/

  deleteReservationStatus(reservationStatusId: number): Promise<void> {
    const url = `${this.libraryReservationServices}deleteInquiryStatus/${reservationStatusId}`;

    console.log(url);

    return this.http.delete(url)
      .toPromise()
      .then(() => null)
      .catch(this.handleErrorPromise);
  }
  /*deleteReservationStatus(reservationStatusId: number): Observable<any>{
    const body = '?inquiry_status_id=' + reservationStatusId;
    let url = this.serverUrl + "deleteInquiryStatus";

    console.log(url);
    console.log(body);

    return this.http.post(url, body)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }*/

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
