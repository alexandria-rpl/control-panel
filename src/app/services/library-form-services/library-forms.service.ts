import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';
import { ThreeDimensionalPrintingForm} from '../../interfaces/library-forms/three-dimensional-printing-form.interface';
import {ThreeDimensionalPrintingColor} from '../../interfaces/static-data/three-dimensional-printing-color.interface';


@Injectable({
  providedIn: 'root'
})
export class LibraryFormsService {

  constructor(private http:Http,
              private router:Router) { }

  libraryFormServices = environment.libraryFormServices;
  sharedStaticDataServices = environment.sharedStaticDataServices;

  /* Shared Static Data */

  /* 3d request forms */
  getPrintingColors(): Observable<ThreeDimensionalPrintingColor[]> {
    const url = this.sharedStaticDataServices + 'getAll3dPrintingColors';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch(error => Observable.throw(error.json()));
  }

  /* End Shared Static Data */

  /* 3d printing request forms */

  getThreeDimensionalPrintingRequests(): Observable<ThreeDimensionalPrintingForm[]> {
    const url = this.libraryFormServices + 'getAll3dPrintingRequestForms';
    return this.http.get(url)
      .map((response: any) => response.json())
      .catch( error => Observable.throw(error.json()));
  }

  /* End 3d printing request forms */
}
