import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subscriber } from '../../controllers/subscriber/subscriber';
import { SubscriberGroup } from './../../controllers/subscriber/subscriber-group';
import { SubscriberMember } from './../../controllers/subscriber/subscriber-member';
import {environment} from '../../../environments/environment';
@Injectable()
export class LibrarySubscriberService {
  private subscribers: Subscriber[];
  constructor(private http: Http) { }

 librarySubscribersService = environment.librarySubscriberServices;

 getAllSubscribers(): Observable<Subscriber[]> {
    const url = this.librarySubscribersService + 'seeAllSubscribers';
    return this.http.get(url)
        .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getSubscribersCount(): Observable<any> {
    const url = this.librarySubscribersService + 'getSubscribersCount';
    return this.http.get(url)
      .map(
        (response: any) => {
          const data = response.json();
          return data;
        }
      );
  }

  getSubscriberGroups() {
    const url = this.librarySubscribersService + 'getAllSubscriberGroups';
    return this.http.get(url)
      .map(
          (response: any) => {
            const data = response.json();
            return data;
          }
      );
  }

  getAllSubscriberGroupMembers(groupId: number): Observable<Subscriber[]> {
    const url = `${this.librarySubscribersService}getAllSubscriberGroupMembers/${groupId}`;
    const members: Subscriber[] = [];

    return this.http.get(url)
      .map(function(res): Subscriber[] {
        /** get all results from service and assign it to var data */
        const data = res.json();
        let i = 0;

        /** make sure data is not null */
        if (data != null) {
          /** if data is not null parse the record into subscriber interface */
          for (i = 0; i < data.length; i++) {
            const record = data[i];
            members.push(new Subscriber(record[0], record[1], record[2], record[3], record[4]));
          }
          console.log(members);
        }
        return members;
      })
      .catch(error => Observable.throw(error.json()));
  }

  getAllUnassignedSubscribers(): Observable<Subscriber[]> {
    const url = this.librarySubscribersService + 'getUnAssignedSubscribers';
    const members: Subscriber[] = [];
    console.log(url);

    return this.http.get(url)
      .map(function(res): Subscriber[] {
        const data = res.json();
        console.log(data);
        let i = 0;

        if (data != null) {
          for (i = 0; i < data.length; i++) {
            const record = data[i];
            members.push(new Subscriber(record[0], record[1], record[2], record[3], record[4]));
          }
          console.log(members);
        }
        return members;
      })
      .catch(error => Observable.throw(error.json()));
  }

  createSubscriberGroup(subscriberGroup: SubscriberGroup): Observable<any> {
    const url = this.librarySubscribersService + 'createGroup';
    console.log(subscriberGroup);
    return this.http.post(url, subscriberGroup)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }


  assignSubscriberToGroup(subscriberMember: SubscriberMember): Observable<any> {
    const url = this.librarySubscribersService + 'assignSubscriberToGroup';
    console.log(subscriberMember);
    return this.http.post(url, subscriberMember)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  deleteSubscriber(_id: number): Observable<any> {
    const url = `${this.librarySubscribersService}deleteSubscriber/${_id}`;

    console.log(url);
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  deleteSubscriberGroup(_id: number): Observable<any> {
    const url = `${this.librarySubscribersService}deleteSubscriberGroup/${_id}`;

    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  deleteSubscriberGroupMember(_id: number): Observable<any> {
    const url = `${this.librarySubscribersService}deleteSubscriberGroupMember/${_id}`;

    console.log(url);

    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
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
