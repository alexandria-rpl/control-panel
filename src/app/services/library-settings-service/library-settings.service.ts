import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { ApplicationSettings } from '../../controllers/application-settings/application-settings';

@Injectable()
export class LibrarySettingsService {
  constructor(private http: Http) { }

  serverUrl = 'http://localhost:8080/api/ApplicationSettings/';

  getAllApplicationSettings(): Observable<ApplicationSettings[]> {
    const url = this.serverUrl + 'getAllApplicationSettings';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  getApplicationSettingsByApplicationName(): Observable<ApplicationSettings[]> {
    const url = this.serverUrl + 'getApplicationSettingsByApplicationName';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  addNewApplicationSetting(applicationSettings: ApplicationSettings): Observable<any> {
    const url = this.serverUrl + 'addNewApplicationSetting';
    console.log(applicationSettings);
    return this.http.post(url, applicationSettings)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  deleteApplicationSetting(_id: number): Observable<any> {
    const url = `${this.serverUrl}deleteApplicationSetting/${_id}`;

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

  handleErrorPromise ( error: Response | any ) {
    console.error(error.message || error);
    return Promise.reject(error.message || error)
  }
}
