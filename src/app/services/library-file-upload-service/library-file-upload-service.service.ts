import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LibraryFileUploadServiceService {

  constructor(private http:Http,
              private router:Router) { }
}
